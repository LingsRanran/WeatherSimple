/*
 * @Author: Ranran
 * @Date: 2018-06-26 15:11:47
 * @LastEditors: Ranran
 * @LastEditTime: 2018-06-26 15:15:23
 * @Description: 
 * @Email: ranran0036@163.com
 * @GitHub: github.com/LingsRanran
 */

$(function(){
    loadHtml();
});

function loadHtml(){
    $('.province_list').append(`<i class='arrow a1 right'></i>`);
    $.get('../JSON/city.json',function(data){
        let oJson = JSON.parse(data);
        
        $.each(oJson['城市代码'],function(ind,item){
            let cityIndex = ind;
            $('.province_list').append(`<li class='province'>${item['省']}</li>`);
            $('.province').eq(ind).append(`<i class='arrow a2 right'></i>`);
            $('.province').eq(ind).append(`<ul class='city_list'></ul>`);
            $.each(item['市'],function(ind,item){
                $('.city_list').eq(cityIndex).append(`<li class='city'><p class='name'>${item['市名']}</p><p class='code'>编码：${item['编码']}</p></li>`);
            });
        });

        $('.name').append(`<i class='arrow a3 right'></i>`);
        $('.arrow').parent().addClass('relative');

        $('.a1').click(function(){
            if($(this).hasClass('right')){
                $(this).removeClass('right').addClass('down');
                $('.province').slideDown();
            }else{
                $(this).removeClass('down').addClass('right');
                $('.province').slideUp();
            }
        });

        $('.a2').each(function(ind,item){
            $(item).click(function(){
                if($(item).hasClass('right')){
                    $(item).removeClass('right').addClass('down');
                    $('.city_list').eq(ind).slideDown();
                }else{
                    $(item).removeClass('down').addClass('right');
                    $('.city_list').eq(ind).slideUp();;
                }
            });
        });

        $('.a3').each(function(ind,item){
            $(item).click(function(){
                if($(item).hasClass('right')){
                    $(item).removeClass('right').addClass('down');
                    $('.code').eq(ind).slideDown();
                }else{
                    $(item).removeClass('down').addClass('right');
                    $('.code').eq(ind).slideUp();
                }
            });
        });
    });
}