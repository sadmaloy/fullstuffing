new WOW().init();
        $(document).ready(function() {
            $('#brif-form').validate({
                rules: {
                    username: {
                        required: true,
                        minlength: 2,
                        maxlength: 15
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    phone: {
                        required: true
                    }
                },
                messages: {
                    username: "Укажите Ваше имя",
                    email: "Укажите Ваш e-mail",
                    phone: "Укажите Ваш телефон"
                }
            });

            $('#modal-form').validate({
                rules: {
                    username: {
                        required: true,
                        minlength: 2,
                        maxlength: 15
                    },
                    phone: {
                        required: true
                    }
                },
                messages: {
                    username: "Укажите Ваше имя",
                    phone: "Укажите Ваш телефон"
                }
            });

            $('#call-form').validate({
                rules: {
                    username: {
                        required: true,
                        minlength: 2,
                        maxlength: 15
                    },
                    phone: {
                        required: true
                    }
                },
                messages: {
                    username: "Укажите Ваше имя",
                    phone: "Укажите Ваш телефон"
                }
            });

            $('#offer-form').validate({
                rules: {
                    username: {
                        required: true,
                        minlength: 2,
                        maxlength: 15
                    },
                    userphone: {
                        required: true
                    }
                },
                messages: {
                    username: "Укажите Ваше имя",
                    userphone: "Укажите Ваш телефон"
                },
                submitHandler: function (form) {
                    var form = this;
                    $.ajax({
                        url: 'mail.php',
                        type: 'POST',
                        data: $(this).serialize()
                    }).done(function() {
                        form.reset();
                    });
                }
                
            });

            $('.phone').mask('+7 (999) 999-99-99');
            $('.slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: $('.arrows__left'),
                nextArrow: $('.arrows__right'),
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },   
                ]
            }); 
        });