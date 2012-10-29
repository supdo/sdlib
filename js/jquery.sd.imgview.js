/***
name: jquery.sd.imgview.js
designer: kukei
Copyright(C) 2011 SupDo.com
Create Date: 2012-09-05
Modify Date: 2012-09-05
***/

(function($){ 
var settings = {
};
$.fn.imgview = function(options) {
	var elements = this;
	var $this = $(this);
	elements.each(function(){
		var self = this;
		var $self = $(self);
		var $selfWrap = $self.wrap($('<span />').css({position:'relative', display:'inline-block'})).parent();
		$selfWrap.append('<div style="background-color:#049FF1;color:#FFFFFF;padding:3px 8px;position:absolute;cursor:pointer;top:0px;left:0px;display:none;">�鿴ԭͼ</div>');
		$selfWrap.find('div').click(function(){
			var imgDlg = $.dialog({
				id:'imgDlg', title:'�鿴ԭͼ', content:'<div style="padding:5px;"><img src='+$self.attr('src')+'></div>',
				lock:true, width:$self.width()+'px', height:$self.height()+'px', ok:function(){}
			});
		});
		$selfWrap.bind("mouseover", function(event){
			$self.css({border: '1px solid #049FF1', padding:'1px', cursor:'pointer'});
			$(this).find('div').slideDown();
		});
		//����ƿ��¼�
		$selfWrap.bind("mouseleave", function(event){
			$self.css({border:'', cursor: 'default'});
			$(this).find('div').slideUp();
		});
	});
}
})($);