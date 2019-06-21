		$(document).ready(function(){

			$('.fav-icon').click(function(){

			if($(this).attr('data-click-state') == 1) {
			$(this).attr('data-click-state', 0)
			$(this).css({'filter':'grayscale(80%)','transition':'0.2s'})
			} else {
			$(this).attr('data-click-state', 1)
			$(this).css({'filter':'grayscale(0%)','transition':'0.2s'})
			}

			});
		});