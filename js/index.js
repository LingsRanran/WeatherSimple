$(function(){
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
    });

});