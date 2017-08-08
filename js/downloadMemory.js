function MemoryIO(dl_id, dl) {
	var dblob
		, IO = this
		, offset = 0
		, msie = typeof MSBlobBuilder === 'function'

	if (d) DEBUG('Creating new MemoryIO instance', dl_id, new Error().stack, dl);

	this.write = function (buffer, position, done) {
		if(msie) {
			dblob.append(have_ab ? buffer : buffer.buffer);
		} else {
			dblob.push(new Blob([buffer]));
		}
		offset += (have_ab ? buffer : buffer.buffer).length;
		done();
	};

	this.download = function(name, path) {
		var blob = this.getBlob();

		if(is_chrome_firefox) {
			requestFileSystem(0,blob.size,function(fs) {
				var opt = { create : !0, fxo : dl };
				fs.root.getFile(dl_id, opt, function(fe)
				{
					fe.createWriter(function(fw) {
						fw.onwriteend = fe.toURL.bind(fe);
						fw.write(blob);
					});
				});
			});
		} else if(msie) {
			navigator.msSaveOrOpenBlob(blob, name);
		} else {
			var blob_url = myURL.createObjectURL(blob);
			var dlLinkNode = document.getElementById('dllink');
			dlLinkNode.download = name;
			dlLinkNode.href = blob_url;
			dlLinkNode.click();
			setTimeout(function () {
				myURL.revokeObjectURL(blob_url);
				blob_url = undefined;
			}, 100);
		}

		IO.abort();
	};

	this.setCredentials = function (url, size, filename, chunks, sizes) {
		if (d) DEBUG('MemoryIO Begin', dl_id, Array.prototype.slice.call(arguments));
		dblob = msie ? new MSBlobBuilder() : [];
		IO.begin();
	};

	this.abort = function() {
		dblob = undefined;
	};

	this.getBlob = function() {
		return msie ? dblob.getBlob() : new Blob(dblob);
	};
}
