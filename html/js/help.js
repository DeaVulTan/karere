function init_help()
{
	var subpage='',search ='';	
	if (page.length > 4) subpage = page.substr(5,page.length-1);
	if (subpage.substr(0,6) == 'search')
	{
		search = subpage.replace('search/','');
		subpage='';
	}	
	$('.new-left-menu-link,.help-block').unbind('click');
	$('.new-left-menu-link,.help-block').bind('click',function(e)
	{
		var c = $(this).attr('class');
		if (!c) return false;
		if (c.indexOf('basics') > -1) document.location.hash = 'help/basics';
		else if (c.indexOf('sharing') > -1) document.location.hash = 'help/sharing';
		else if (c.indexOf('security') > -1) document.location.hash = 'help/security';
		else if (c.indexOf('account') > -1) document.location.hash = 'help/account';
		else if (c.indexOf('sync') > -1) document.location.hash = 'help/sync';
		else if (c.indexOf('ios') > -1) document.location.hash = 'help/ios';
		else if (c.indexOf('android') > -1) document.location.hash = 'help/android';
		else document.location.hash = 'help';
	});	
	
	
	
	$('.new-left-menu-link.home').addClass('active');
	
	$('.new-right-content-block').addClass('hidden');	
	if (search)
	{
		var html = '<h1 class="help-home-header">Help Centre - <span class="red">search</span></h1><div class="blog-new-search"><input value="" class="help_search"/></div><div class="blog-new-div"><div></div></div>';		
		var a=0;
		for (var i in helpdata)
		{
			if (helpdata[i].q.toLowerCase().indexOf(search.toLowerCase()) > -1 || helpdata[i].a.toLowerCase().indexOf(search.toLowerCase()) > -1)
			{
				html +='<h2>' + helpdata[i].q + '</h2>' + helpdata[i].a + '';
				a++;
			}
		}
		if (a == 0) html += '<h2>' + l[978] + '</h2>';		
		$('.new-right-content-block.help-info-pages').html(html);
		$('.new-right-content-block.help-info-pages').removeClass('hidden');
		$('.help_search').val(search);
		mainScroll();
		scrollMenu();
	}	
	else if (subpage)
	{
		$('.new-left-menu-link').removeClass('active');			
		var id,title;		
		if (subpage == 'basics')
		{
			id=0;
			title = 'Basics';
			$('.new-left-menu-link.basics').addClass('active');
		}
		else if (subpage == 'sharing')
		{
			id=1;
			title = 'Sharing';
			$('.new-left-menu-link.sharing').addClass('active');
		}
		else if (subpage == 'security')
		{
			id=2;
			title = 'Security & Privacy';
			$('.new-left-menu-link.security').addClass('active');
		}
		else if (subpage == 'account')
		{
			id=3;
			title = 'Account';
			$('.new-left-menu-link.account').addClass('active');
		}
		else if (subpage == 'sync')
		{
			id=4;
			title = 'Sync Client';
			$('.new-left-menu-link.sync').addClass('active');
		}
		else if (subpage == 'ios')
		{
			id=5;
			title = 'iOS App';
			$('.new-left-menu-link.ios').addClass('active');
		}
		else if (subpage == 'android')
		{
			id=6;
			title = 'Android App';
			$('.new-left-menu-link.android').addClass('active');
		}
		var html = '<h1 class="help-home-header">Help Centre - <span class="red">' + title + '</span></h1>';
		for (var i in helpdata) if (helpdata[i].c == id) html +='<h2>' + helpdata[i].q + '</h2>' + helpdata[i].a + '';
		$('.new-right-content-block.help-info-pages').html(html);
		$('.new-right-content-block.help-info-pages').removeClass('hidden');
		mainScroll();
	}
	else
	{
		$('.new-right-content-block.home').removeClass('hidden');		
	}
	$('.help_search').unbind('keyup');
	$('.help_search').bind('keyup',function(e)
	{
		if (e.keyCode == 13) document.location.hash = 'help/search/' + $(this).val();
	});	
	$('.help_search').unbind('focus');
	$('.help_search').bind('focus',function(e)
	{
		if ($(this).val() == l[102]) $(this).val('');
	});
	$('.help_search').unbind('blur');
	$('.help_search').bind('blur',function(e)
	{
		if ($(this).val() == '') $(this).val(l[102]);
	});
	scrollMenu()
}


l[1212] = l[1212].replace('[A]','<a href="#sdk" class="red">').replace('[/A]','</a>');	
l[1218] = l[1218].replace('[A]','<a href="#affiliateterms" class="red">').replace('[/A]','</a>');		
l[1863] = l[1863].replace('[A]','<a href="#mobile">').replace('[/A]','</a>');
l[1863] = l[1863].replace('[B]','<a href="https://itunes.apple.com/app/mega/id706857885" target="_blank">').replace('[/B]','</a>');
l[1863] = l[1863].replace('[C]','<a href="https://play.google.com/store/apps/details?id=com.flyingottersoftware.mega" target="_blank">').replace('[/C]','</a>');	
l[1862] = l[1862].replace('[A]','<a href="https://play.google.com/store/apps/details?id=com.flyingottersoftware.mega" target="_blank">').replace('[/A]','</a>');
l[1860] = l[1860].replace('[A]','<a href="https://itunes.apple.com/app/mega/id706857885" target="_blank">').replace('[/A]','</a>');	
l[1828] = l[1828].replace('[A]','<a href="#sync">').replace('[/A]','</a>');



var helpdata = 
[
{
	//q: 'What does "MEGA" stand for?',	
	q: l[259],
	a: '<p>' + l[260] + '</p>',
	c: [0]
},
{
	//q: 'What is MEGA all about?',
	q: l[261],
	a: '<p>' + l[262] + '</p>',
	c: [0],
	i: 1
},
{
	//q: 'Is MEGA legal?',
	q: l[692],
	a: '<p>' + l[264].replace('[B]','<i>').replace('[/B]','</i>').replace('[A]','<a href="#terms">').replace('[/A]','</A>') + '</p> ',
	c: [0],
	i:1,
},
{
	// q: 'Why base a cloud storage company in New Zealand, of all places?',
	q: l[267],
	a: '<p>' + l[268].replace('cloud','<b>cloud</b>') + '</p> ',
	c: [0],
	i:1
},
{
	// q: 'Can I access MEGA on my mobile device?',
	q: l[269],
	a: '<p>' + l[1863] + '</p>',
	c: [0],
	i: 1
},
{
	// q: 'Can I resume interrupted up- or downloads?',
	q: l[271],
	a: '<p>' + l[272] + '</p>',
	c: [0]
},
{
	// q: 'Can I upload the same file multiple times?',
	q: l[273],
	a: '<p>' + l[274] + '</p>',
	c: [0]
},
{
	q: l[275],
	a: '<p>' + l[276] + '</p>',
	c: [0]
},
{
	// q: 'Are there any file size limits on MEGA?',
	q: l[277],
	a: '<p>' + l[278] + '</p>',
	c: [0]
},
{
	// q: 'Can I upload and download at the same time?',
	q: l[279],
	a: '<p>' + l[280] + '</p>',
	c: [0]
},
{
	// q: 'How do I upload files to MEGA?',
	q: l[283],
	a: '<p>' + l[284] + '<br>' + l[285] + '<br>' + l[286] + '<br>' + l[287] + '</p>',
	c: [0]
},
{
	// q: 'How do I install MEGA?',
	q: l[288],
	a: '<p>' + l[289] + '</p>',
	c: [0]
},
{
	// q: 'Do you offer an API?',
	q: l[359],
	a: '<p>' + l[361].replace('[A]','<a href="#dev">').replace('[/A]','</A>') + '</p>',
	c: [0]
},
{
	// q: 'How does folder sharing work?',
	q: l[366],
	a: '<p>' + l[367] + '</p>',
	c: [1]
},
{
	// q: 'How does folder sharing work?',
	q: l[290],
	a: '<p>' + l[291] + '</p><p>' + l[292] + '</p><p>' + l[293] + '</p>',
	c: [1]
},
{
	// q: 'How do I delete people from my shared folder?',
	q: l[294],
	a: '<p>' + l[295] + '</p>',
	c: [1]
},
{
	// q: 'How do I recognize my shared folders?',
	q: l[296],
	a: '<p>' + l[297] + '</p>',
	c: [1]
},
{
	// q: 'Can I share a shared folder?',
	q: l[298],
	a: '<p>' + l[299] + '</p>',
	c: [1]
},
{
	// q: 'How do I link to a file on MEGA?',
	q: l[302],
	a: '<p>' + l[303] + '</p> <p>' + l[304] + '</p>',
	c: [1]
},
{
	// q: 'How does the encryption work?',
	q: l[305],
	a: '<p>' + l[306] + '</p>',
	c: [2],
	i:1
},
{
	// q: 'Is all of my personal information subject to encryption?',
	q: l[307],
	a: '<p>' + l[308] + '</p>',
	c: [2]
},
{
	// q: 'Is my stored data absolutely secure?',
	q: l[309],
	a: '<p>' + l[310] + '</p><p>' + l[311] + '<br>' + l[312] + '<br>' + l[313] + '<br>' + l[314] + '<br>' + l[315] + '</p><p>' + l[316] + '<br>' + l[317] + '<br>' + l[318] + '<br>' + l[319] + '<br></p>',
	c: [2]
},
{
	// q: 'What if I don't trust you? Is it still safe for me to use MEGA?',
	q: l[320],
	a: '<p>' + l[321] + '</p>',
	c: [2]
},
{
	// q: 'Is data that I put in shared folders as secure my other data?',
	q: l[324],
	a: '<p>' + l[325] + '</p>',
	c: [2]
},
{
	// q: 'Let's assume that a MEGA storage node is physically compromised. What are the risks?',
	q: l[326],
	a: '<p>' + l[327] + '</p>',
	c: [2]
},
{
	// q: 'Is it a good idea to store all of my data in a single place?',
	q: l[328],
	a: '<p>' + l[329] + '</p>',
	c: [2]
},
{
	// q: 'Why should I entrust my data to, of all people, you?',
	q: l[330],
	a: '<p>' + l[331] + '</p>',
	c: [2]
},
{
	// q: 'I noticed that you are using HTTPS for transferring already encrypted file data. Isn't that redundant?',
	q: l[332],
	a: '<p>' + l[333] + '</p>',
	c: [2]
},
{
	// q: 'What encryption algorithms does MEGA use internally?',
	q: l[334],
	a: '<p>' + l[335] + '</p><p>' + l[336] + '</P><p>' + l[337] + '</P>',
	c: [2]
},
{
	// q: 'Does MEGA keep backups of my files?',
	q: l[338],
	a: '<p>' + l[339] + '</p>',
	c: [3],
	i: 1
},
{
	// q: 'I have forgotten my password. Can I reset it?',
	q: l[340],
	a: '<p>' + l[341] + '</p>',
	c: [3],
	i: 1
},
{
	// q: 'What do I get with my free account?',
	q: l[348],
	a: '<p>' + l[349].replace('[X]','50 GB').replace('[A1]','<a href="#pro">').replace('[/A1]','</a>').replace('[A2]','<a href="#fm/account">').replace('[/A2]','</a>') + '</p>',
	c: [3],
	i: 1,
},
{
	// q: 'When do I need to upgrade to a Pro account?',
	q: l[344],
	a: '<p>' + l[345] + '</p>',
	c: [3]
},
{
	// q: 'Why is there an option to limit my uploading speed, and why is it enabled by default?',
	q: l[346],
	a: '<p>' + l[347] + '</p>',
	c: [3]
},

// Sync
{
	q: l[1825],
	a: '<p>' + l[1826] + '</p>',
	c: [4]
},
{
	q: l[1827],
	a: '<p>' + l[1828] + '</p>',
	c: [4]
},
{
	q: l[1829],
	a: '<p>' + l[1830] + '</p>',
	c: [4]
},
{
	q: l[1831],
	a: '<p>' + l[1832] + '</p>',
	c: [4]
},
{
	q: l[1833],
	a: '<p>' + l[1834] + '</p>',
	c: [4]
},
{
	q: l[1835],
	a: '<p>' + l[1836] + '</p>',
	c: [4]
},
{
	q: l[1837],
	a: '<p>' + l[1838] + '</p>',
	c: [4]
},
{
	q: l[1839],
	a: '<p>' + l[1840] + '</p>',
	c: [4]
},
{
	q: l[1841],
	a: '<p>' + l[1842] + '</p>',
	c: [4]
},
{
	q: l[1843],
	a: '<p>' + l[1844] + '</p>',
	c: [4]
},
{
	q: l[1845],
	a: '<p>' + l[1846] + '</p><p>' + l[1847] + '</p><p>' + l[1848] + '</p> ',
	c: [4]
},

{
	q: l[1886],
	a: '<p>' + l[1887] + '</p>',
	c: [4]
},

{
	q: l[1849],
	a: '<p>' + l[1850] + '</p>',
	c: [4]
},

{
	q: l[1851],
	a: '<p>' + l[1852] + '</p>',
	c: [4]
},

{
	q: l[1853],
	a: '<p>' + l[1854] + '</p>',
	c: [4]
},

{
	q: l[1855],
	a: '<p>' + l[1856] + '</p>',
	c: [4]
},

{
	q: l[1857],
	a: '<p>' + l[1858] + '</p>',
	c: [4]
},

// iOS
{
	q: l[1859],
	a: '<p>' + l[1860] + '</p>',
	c: [5]
},


// Android
{
	q: l[1861],
	a: '<p>' + l[1862] + '</p>',
	c: [6]
}

]
