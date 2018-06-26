
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
script.type = 'text/javascript';
script.onreadystatechange = handler;
script.onload = handler;
document.getElementsByTagName('head')[0].appendChild(script);
data_company = document.getElementById("v_chat_id").getAttribute("data-company");
function handler(){
    $('head').append('<link rel="stylesheet" href="http://localhost:3000/css/chat.css" type="text/css" />');

    $(document).ready(function(){

        $('body').append('<a id="toggle_chat"><i class="material-icons">\n' +
            '                    message\n' +
            '            </i></a>')



        $('body').append('<div class="h_iframe">\n' +
            '                <div id="header_chat"><div class="header_chat_layout">\n' +
            '                        <span id="icon_close" class="wrapper_icon">\n' +
            '                            <i class="material-icons">\n' +
            '                            close\n' +
            '                        </i>\n' +
            '                        </span>\n' +
            '\n' +
            '                    </div></div>\n' +
            '                <iframe src="http://localhost:3000/chat/'+data_company+'"\n' +
            '                allowTransparency="true"\n' +
            '                class="iframe" \n' +
            '                id="theiframe"\n' +
            '                frameborder="0"\n' +
            '                allowfullscreen></iframe>\n' +
            '            </div>')


        $('#theiframe').on('load',function () {
            $('#toggle_chat').css('display','flex')
            $('#toggle_chat').click(function () {
                $('.h_iframe').fadeToggle(200);
            })
            $('#icon_close').click(function () {
                $('.h_iframe').fadeToggle(200);
            })
        })

    });
}


