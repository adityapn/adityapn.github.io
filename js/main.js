$(document).ready(function(){
    $('#details').hide();
    
    $('.close').live('click', function(event) {
        event.preventDefault();
        hideDetails();
    });
     

    $('#nav > div').hover(
        function () {
            var $this = $(this);
            $this.find('img').stop().animate({
                'width'     :'199px',
                'height'    :'199px',
                'top'       :'-25px',
                'left'      :'-25px',
                'opacity'   :'1.0'
            },500,'easeOutBack',function(){
                $(this).parent().find('ul').fadeIn(700);
            });

            $this.find('a:first,h2').addClass('active');
        },
        function () {
            var $this = $(this);
            $this.find('ul').fadeOut(500);
            $this.find('img').stop().animate({
                'width'     :'80px',
                'height'    :'80px',
                'top'       :'0px',
                'left'      :'0px'                        
            },500,'easeOutBack');

            $this.find('a:first,h2').removeClass('active');
        }
    );    

     $("a").click(function(e){        
        var section = $(this).attr('section');
        // if the click does not have a section then redirect to the link
        // in case of any falsy value
        if(!section){
          return;  
        }

        e.preventDefault();
        renderContent(section);
    });

     function renderContent(section_name){
        section_name = section_name.toLocaleLowerCase();

        var html = getHtml(section_name);
        renderUIElement(html);
     }

     function showDetails(){
        $('#details').show();
     }

     function hideDetails(){
        $('#details').hide();  
     }

     function renderUIElement(html){                
        $('#details').html(html);
        $('#details').slideDown();        
     }

     function getHtml(section_name){
        var html = "<h1>Not found</h1>";
        switch(section_name){
            case "about":
                var content = getHomePageContent();
                html = renderTemplate("About",content);
            break;

            case "testimonials":
                var content = getHomePageContent();
                html = renderTemplate("Testimonials",content);
            break;

            case "consultation":
                var content = getHomePageContent();
                html = renderTemplate("Consultation",content);
            break;

            case "articles":
                var content = getHomePageContent();
                html = renderTemplate("Articles",content);
            break;

            case "contact":
                var content = getHomePageContent();
                html = renderTemplate("Contact us",content);
            break;

            default:
            break;
        }
        return html;
     }

     function renderTemplate(title,content){
        var html =  "<a href='#' class='close'>[x]</a><center>"+
                        "<br/><h3>"+title+"</h3>"+
                        content                        
                    +"</center>";

        return html;
     }

     function getHomePageContent(){
        var html = "<p class='para'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.</p>";
        html+= "<p class='para'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>";
        return html;
     }
});
