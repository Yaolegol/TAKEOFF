$(document).ready(function() {    
    $("body").on('click', '[href*="#how-it-works"]', function(e){        
        var fixed_offset = 0;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000, "easeInQuart");
        e.preventDefault();
      });
      $("body").on('click', '[href*="#features"]', function(e){        
        var fixed_offset = 0;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000, "easeInQuart");
        e.preventDefault();
      });
      $("body").on('click', '[href*="#app"]', function(e){        
        var fixed_offset = 0;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000, "easeInQuart");
        e.preventDefault();
      });
      $("body").on('click', '[href*="#contact"]', function(e){        
        var fixed_offset = 0;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000, "easeInCirc");
        e.preventDefault();
      });
      $("body").on('click', '[href*="#main"]', function(e){        
        var fixed_offset = 0;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000, "easeInCirc");
        e.preventDefault();
      });

 });