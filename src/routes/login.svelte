<svelte:head>
    <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Login - Bumble Bees Client Portal </title>
<meta name="description" content="Login - Bumble Bees Client Portal">
<meta name="author" content="Bumble Bees IT Solutions">
<meta name="copyright" content="Bumble Bees IT Solutions">
<meta name="robots" content="index, follow">
    
</svelte:head>

<div class="user-data-page clearfix d-md-flex">
    <div class="illustration-wrapper d-none d-md-flex align-items-center justify-content-between flex-column" style="background: #F9F5F0;;">
        <div class="row">
            <div class="col-xxl-8 col-xl-11 m-auto">
                
            </div>
        </div>
        <div class="illustration-holder">
            <img src="images/assets/ils_05.png" alt="" class="illustration ms-auto">
        </div>
    </div> <!-- /.illustration-wrapper -->

    <div class="form-wrapper">
        
        <form method="post" action="https://portal.bumblebees.co.in//client/auth/" class="user-data-form mt-80 lg-mt-50">
            <h2 class="font-recoleta">Hi <span>buddy</span>, welcome <br> Back!</h2>
            <p class="header-info pt-20 pb-50 lg-pb-30">Still don't have an account? <a target="_blank" href="https://portal.bumblebees.co.in//client/register/">Sign up</a></p>

            <div class="row">
                <div class="col-12">
                    <div class="input-group-meta mb-30">
                        <label for="">Email</label>
                        <input type="email" name="username" placeholder="example@gmail.com">
                    </div>
                </div>
                <div class="col-12">
                    <div class="input-group-meta mb-25">
                        <label for="">Password</label>
                        <input type="password" placeholder="Enter Password" class="pass_log_id" name="password">
                        <span class="placeholder_icon"><span class="passVicon"><img src="images/icon/icon_67.svg" alt=""></span></span>
                    </div>
                </div>
                <div class="col-12">
                    <div class="agreement-checkbox d-flex justify-content-between align-items-center">
                        <div>
                            <input type="checkbox" id="remember">
                            <label for="remember">Keep me logged in</label>
                        </div>
                        <a href="/">Forget Password?</a>
                    </div> <!-- /.agreement-checkbox -->
                </div>
                <div class="col-12">
                    <button class="theme-btn-one w-100 mt-50 mb-50" type="submit">Login</button>
                </div>
                <div class="col-12">
                    <p class="text-center copyright-text">Copyright @2023 Bumble Bees IT Solutions.</p>
                </div>
            </div>
        </form>
    </div> <!-- /.form-wrapper -->
</div>