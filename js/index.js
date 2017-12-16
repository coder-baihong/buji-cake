$(function(){
	var span_html=$('.header_zhong_top_div1_span1').html()+$('.header_zhong_top_div1_span1').html()
	$('.header_zhong_top_div1_span1').html(span_html);
	var width_span=$('.header_zhong_top_div1_span1').width();
		$('.header_zhong_top_div1_span1').css('width',$('.header_zhong_top_div1_span1').width()*2)
		

		var timer11=setInterval(staMoveq,200);
		
//		$('.header_zhong_top_div1').hover(function(){
//			clearInterval(timer11);
//			$('.header_zhong_top_div1_span1').stop();
//			
//		},function(){
//			
//		timer11=setInterval(staMoveq,200)
//		
//		});
		
//		$('#auto-scroll').hover(function(){
//      clearInterval(timer); 
//  }, function(){ 
//      timer = setInterval('moveTo("#auto-scroll")', 3000) ;
//  }).trigger('mouseleave'); 
    
    
		function staMoveq(){
			$('.header_zhong_top_div1_span1').animate(
		{'left':-565},7000,'linear',function(){
			  $(this).css({left: "0px"})
		})
		};
		
		// 顶部导航
//		$('.header_zhong_bottom_ul1').find('a').hover(function(){
//			$('.header_zhong_bottom_ul1').find('a').removeClass('a_active');
//			$(this).addClass('a_active')
//		});
		
//		蛋糕移入出现黑框
		var index1=null;
		$('.bu_nr_zhong_ul1').find('li').hover(function(){
			index1=$('.bu_nr_zhong_ul1').find('li').index(this);
			$('.li_hover').eq(index1).stop().animate({'bottom':'0px'})
		},function(){
			$('.li_hover').eq(index1).stop().animate({'bottom':'-60px'})
		});
		
		
//		表单点击显示

	$('.input_hover').click(function(){
		
		if($('.input_hover_block').css('display')=='none')
		{
			$('.input_hover_block').css('display','block');
			$('.shichi_zhong_right_div1_img1').attr('src','img/xiangs.png');
		}else{
			
			$('.input_hover_block').hide();
			$('.shichi_zhong_right_div1_img1').attr('src','img/xiangx.png')
		};
		return false;
	});
	
	$(document).click(function(){
		$('.input_hover_block').hide();
	});
	
	
	$('.input_hover_block').find('p').hover(function(){

		$('.input_hover_block').find('p').removeClass('p_hover_active');
		$(this).addClass('p_hover_active');
	});
	
	$('.input_hover_block').find('p').click(function(){
		if($(this).hasClass('p_hover_active'))
		{			
			$('#diji_block').val($(this).html());
		}
	});
	
	
//	编辑个人资料页面
	
	var speed1=3;
	$('.xinzeng').click(function(){
		speed1++
		var Xin_text=$('<div style="margin-top: 15px;"><span  class="duan_div tianbiao_top_1_span1 kuan" style="position: relative;left:-6px">纪念日'+speed1+' :</span><input type="text"  class="shouji_haoma jinian" placeholder="请输入您的邮箱" style="margin-left:3px"/><span  class="duan_div tianbiao_top_1_span1 kuan"></span><input type="text"  class="shouji_haoma jinian" placeholder="请选择日期" style="margin-top: 15px;margin-left:3px;"/></div>')
		$(this).before(Xin_text);
	})
		
		$('.gongli_img').click(function(){
			$('.gongli_img').attr('src','img/nongli.png')
			if($(this).attr('src')=='img/nongli.png')
			{
				$(this).attr('src','img/gongli.png');
			}else{
				$(this).attr('src','img/nongli.png');
			}
//			$(this).attr('src','img/nongli.png')
		});
		
//		爱好
		$('.tianbiao_top_1_span1_ul1').find('li').click(function(){
			if($(this).hasClass('li_bianseActive'))
			{
				$(this).removeClass('li_bianseActive')
			}else{
				$(this).addClass('li_bianseActive');
			}
			
		});

		
//		弹窗

	var Oposi_top=($(window).height()-154)/2;
	var Oposi_left=($(window).width()-250)/2;
	var Oposi_top2=($(window).height()-278)/2;
	var Oposi_left2=($(window).width()-250)/2;
	var ai_top=($(window).height()-320)/2;
	var ai_left=($(window).width()-647)/2;
	$('.tan_1').css({'position':'fixed','left':Oposi_left,'top':Oposi_top});
	$('.tan_2').css({'position':'fixed','left':Oposi_left2,'top':Oposi_top2});
	$('.ai_tan').css({'position':'fixed','left':ai_left,'top':ai_top});
	$(window).resize(function(){
		var Oposi_top=($(window).height()-152)/2;
		var Oposi_left=($(window).width()-248)/2;
		var ai_top=($(window).height()-320)/2;
		var ai_left=($(window).width()-647)/2;
		var Oposi_top2=($(window).height()-278)/2;
		var Oposi_left2=($(window).width()-250)/2;
		$('.tan_1').css({'position':'fixed','left':Oposi_left,'top':Oposi_top});
		$('.ai_tan').css({'position':'fixed','left':ai_left,'top':ai_top});
		$('.tan_2').css({'position':'fixed','left':Oposi_left2,'top':Oposi_top2});
	})
	
	
	//点击保存
		
	$('.baocun_bottom').click(function(){
		if($('.tianbiao_top_1').find('input').val()=='')
		{
			$('.zhezhao').show();
			$('.T_2').fadeIn(400);
		}else{
			$('.zhezhao').show();
			$('.T_1').fadeIn(400);
		};
		

	});
	
	$('.guanbi_anniu,.tan_1_a').click(function(){
		$('.zhezhao,.tan_1').hide();
	});
	
	
	$('.xiugai').click(function(){
		$('.zhezhao').show();
		$('.tan_2').fadeIn(400)
		
	});
	
	$('.tan_2_img').click(function(){

		$('.zhezhao,.tan_2').hide();
	});
	
	$('.tan_2_a1').click(function(){
		if($('.tan_2_in').find('input').val()=='')
		{
			alert('请确认信息 是否填好')
			
		}else{
			
			$('.zhezhao,.tan_2').hide();
		}
	})
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//家谱页面
	
	var index_jia=null;
	$('.jia_nr_zhong_div1_ul1').find('li').click(function(){
		index_jia=$('.jia_nr_zhong_div1_ul1').find('li').index(this);
		$('.jia_nr_zhong_div1_ul1').find('li').removeClass('li_cilck_active');
		$(this).addClass('li_cilck_active')
	});
	
	$('.jia_nr_zhong_div1_ul2').find('li').click(function(){
		
		index_jia=$('.jia_nr_zhong_div1_ul2').find('li').index(this);
		
		$('.jia_nr_zhong_div1_ul2').find('li').removeClass('li_cilck_active');
		
		$(this).addClass('li_cilck_active')
	});
	
	$('.jia_nr_zhong_div1_ul3').find('li').click(function(){
		
		index_jia=$('.jia_nr_zhong_div1_ul3').find('li').index(this);
		
		$('.jia_nr_zhong_div1_ul3').find('li').removeClass('li_cilck_active');
		
		$(this).addClass('li_cilck_active')
	});
	
	
	
//	爱情页面
	$('.xiang_zhong_div1_div4_a1_aiqing').click(function(){
		
		$('.ai_zhe').show();
		
		$('.ai_tan').fadeIn(500)
	});
	
	$('.ai_tan_div1_span2,.ai_tan_div2_div3_a2').click(function(){
		
		$('.ai_zhe,.ai_tan').hide();
	});
	
	$('.ai_tan_div2_div3_a1').click(function(){
		
		if($('.ai_tan_div2').find('input').val()=='')
		{
			alert('请确认信息 是否填好')
			
		}else{
			
			$('.ai_zhe,.ai_tan').hide();
		}
	})
	
	
	
})
