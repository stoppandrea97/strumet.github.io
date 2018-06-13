/*\
|*|
|*|  IE-specific polyfill that enables the passage of arbitrary arguments to the
|*|  callback functions of javascript timers (HTML5 standard syntax).
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/API/window.setInterval
|*|  https://developer.mozilla.org/User:fusionchess
|*|
|*|  Syntax:
|*|  var timeoutID = window.setTimeout(func, delay[, param1, param2, ...]);
|*|  var timeoutID = window.setTimeout(code, delay);
|*|  var intervalID = window.setInterval(func, delay[, param1, param2, ...]);
|*|  var intervalID = window.setInterval(code, delay);
|*|
\*/

if (document.all && !window.setTimeout.isPolyfill) {
  var __nativeST__ = window.setTimeout;
  window.setTimeout = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
    var aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeST__(vCallback instanceof Function ? function () {
      vCallback.apply(null, aArgs);
    } : vCallback, nDelay);
  };
  window.setTimeout.isPolyfill = true;
}

if (document.all && !window.setInterval.isPolyfill) {
  var __nativeSI__ = window.setInterval;
  window.setInterval = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
    var aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeSI__(vCallback instanceof Function ? function () {
      vCallback.apply(null, aArgs);
    } : vCallback, nDelay);
  };
  window.setInterval.isPolyfill = true;
}
////////////////////////////////////////////////////////////////


function readTextFile(file){
	var text = '1'
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
				text = allText;
            }
        }
    }
    rawFile.send(null);
	return text
}

slash_index = function (x) {return x.indexOf('/')};
dot_index = function (x) {return x.indexOf('.')};

get_file_as_list = function (x) {
	tmp = readTextFile(x).split('\n');
	return tmp.filter(y => y.length > 0);
}

students_list = get_file_as_list('students_list');
about_list = get_file_as_list('about_list');
project_list = get_file_as_list('prj_list');

stud_list = students_list.reduce(function (all_stud , stud) {
	id_name = stud.split(';')
	all_stud[id_name[0]] = id_name[1].toLowerCase();
	return all_stud;
	}, {});

ab_list = about_list.reduce(function (all_stud , stud) {
	id_no = stud.substring(slash_index(stud) + 1, dot_index(stud))
	all_stud[id_no] = {
		'path': stud,
		'name': stud_list[id_no]};
	return all_stud;
	}, {});

// init object with property:value pair as name_of_folder:path_to_folder
prj_list = project_list.reduce(function (all_proj , proj) {
	group = proj.substring(slash_index(proj) + 1, proj.length - 1)
	all_proj[group] = proj;
	return all_proj;
	}, {});

var href = window.location.href;
var root_end = 'strumet.github.io/'.length;
var root_start = href.indexOf('strumet.github.io/');
var root_folder = href.substring(0, root_start + root_end);
var css = root_folder + "style.css";
var home_link = root_folder + "index.html";
var about_link = root_folder + "about.html";
var credits_link = root_folder + "credits.html";

var footer_menu = {
	'Home': home_link,
	'About': about_link,
	'Credits': credits_link
};

var li_fly = Object.keys(prj_list).map(function (y) {
		return '<li><a href="' + root_folder + 'projects/' + y +
			'/index.html" class="fly">' + y + '</a></li>';
	}).join('');

var li_footer = '<ul class="nav">' + Object.keys(footer_menu).map(function (x) {
	return '<li class="footer"><a class="top_link" href="' +
		footer_menu[x] + '">' + x + '</a></li>';}).join('') + '</ul>';

var title = '<h1>Methods and instruments for design _ I2.2018</h1>' +
	'<p class="subheading">drawings for ' + Object.keys(prj_list).length +
	' architectural design<br>' + 
	'<em>(a course assignment)</em></p>';

var ul_first_li_top = '<li id="li_top_home" class="top">' +
		'<a href="' + home_link + '" class="top_link"><span>Home</span></a></li>';

var ul_proj_li_top = '<li id="li_top_projects" class="top">' +
		'<a href="#" class="top_link def_cursor"><span>Projects</span></a>' +
		'<ul id="ul_sub_prj" class="sub">' + li_fly + '</ul></li>';

var ul_last_li_top = '<li id="li_top_about" class="top">' +
		'<a href="' + about_link + '" class="top_link"><span>About</span></a></li>';


var li_top = ul_first_li_top + ul_proj_li_top + ul_last_li_top;


var nav = document.createElement("nav");
var ul__nav = document.createElement("ul");
ul__nav.className = 'nav';

var header = document.createElement("header");
header.className = "strumet_header_footer";
header.id = "strumet_header";
var footer = document.createElement("footer");
footer.className = "strumet_header_footer";
footer.id = "strumet_footer";
footer.innerHTML = li_footer

var link_style = document.createElement("link");
link_style.rel = 'stylesheet';
link_style.href = css;

ul__nav.innerHTML = li_top;
header.innerHTML = title;
nav.appendChild(ul__nav);
header.appendChild(nav);

document.head.appendChild(link_style);
document.body.insertBefore(header, document.body.firstChild);
document.body.appendChild(footer);

var thumbs = '<ul class="ul_tmb">' + Object.keys(prj_list).map(function (y) {
		return '<li class="li_tmb">' +
			'<figure class="fig_tmb" id="fig_tmb_' + y +
			'" style="background-image: url(\'' + prj_list[y] + 'cover.png\')">' +
				'<a class="a_tmb" href="' + root_folder + 'projects/' +
		   			y + '/index.html"><div class="div_tmb"></div>' +
					'<figcaption id="cpt_tmb_' + y + '">' + y + '</figcaption>' +
			'</a></figure></li>';
	}).join('') + '</ul>';

function fix_caption() {
	for (i in prj_list) {
		cpt = document.getElementById('cpt_tmb_' + i);
		cpt.style.bottom = cpt.offsetHeight + 'px';
	}
}
