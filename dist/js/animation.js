$(document).ready(function() {

    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        var scroll_h = $(window).height();
        if ($('#home').length) {
            // console.log(scroll);
            // console.log(scroll_h);
            var overview_content = $('#overview_content').offset().top
            var value_locked = $('#value_locked').offset().top
            var growth_chart = $('#growth_chart').offset().top
            var features = $('#features').offset().top
            var tier_system = $('#url_tier_system').offset().top
            var project = $('#project').offset().top
            var team = $('#team').offset().top
            var partner = $('#partner').offset().top
            var faq = $('#faq').offset().top
            if (overview_content - scroll_h < scroll) {
                $("#overview_content").removeClass('fade_out_top_overview_content')
                $("#overview_content").addClass('fade_in_top_overview_content')
                $("#overview_img").removeClass('fade_out_top_overview_img')
                $("#overview_img").addClass('fade_in_top_overview_img')
            } else {
                $("#overview_content").removeClass('fade_in_top_overview_content')
                $("#overview_content").addClass('fade_out_top_overview_content')
                $("#overview_img").removeClass('fade_in_top_overview_img')
                $("#overview_img").addClass('fade_out_top_overview_img')
            }

            if (value_locked - scroll_h < scroll) {
                $("#value_locked").removeClass('fade_out_left_value_locked')
                $("#value_locked").addClass('fade_in_left_value_locked')
            } else {
                $("#value_locked").removeClass('fade_in_left_value_locked')
                $("#value_locked").addClass('fade_out_left_value_locked')
            }

            if (growth_chart - scroll_h < scroll) {
                $("#growth_chart").removeClass('fade_out_top_overview_content')
                $("#growth_chart").addClass('fade_in_top_overview_content')
            } else {
                $("#growth_chart").removeClass('fade_in_top_overview_content')
                $("#growth_chart").addClass('fade_out_top_overview_content')
            }
            if (features - scroll_h < scroll) {
                $("#features").removeClass('fade_out_top_overview_content')
                $("#features").addClass('fade_in_top_overview_content')
            } else {
                $("#features").removeClass('fade_in_top_overview_content')
                $("#features").addClass('fade_out_top_overview_content')
            }

            if (tier_system - scroll_h < scroll) {
                $("#url_tier_system").removeClass('fade_out_top_overview_content')
                $("#url_tier_system").addClass('fade_in_top_overview_content')
            } else {
                $("#url_tier_system").removeClass('fade_in_top_overview_content')
                $("#url_tier_system").addClass('fade_out_top_overview_content')
            }

            if (project - scroll_h < scroll) {
                $("#project").removeClass('fade_out_left_value_locked')
                $("#project").addClass('fade_in_left_value_locked')
            } else {
                $("#project").removeClass('fade_in_left_value_locked')
                $("#project").addClass('fade_out_left_value_locked')
            }
            if (team - scroll_h < scroll) {
                $("#team").removeClass('fade_out_top_overview_content')
                $("#team").addClass('fade_in_top_overview_content')
            } else {
                $("#team").removeClass('fade_in_top_overview_content')
                $("#team").addClass('fade_out_top_overview_content')
            }
            if (partner - scroll_h < scroll) {
                $("#partner").removeClass('fade_out_top_overview_content')
                $("#partner").addClass('fade_in_top_overview_content')
            } else {
                $("#partner").removeClass('fade_in_top_overview_content')
                $("#partner").addClass('fade_out_top_overview_content')
            }

            if (faq - scroll_h < scroll) {
                $("#faq").removeClass('fade_out_left_value_locked')
                $("#faq").addClass('fade_in_left_value_locked')
            } else {
                $("#faq").removeClass('fade_in_left_value_locked')
                $("#faq").addClass('fade_out_left_value_locked')
            }
        }

    })

})