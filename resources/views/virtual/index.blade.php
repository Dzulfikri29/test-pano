<!DOCTYPE html>
<html lang="en">

<head>
    <!-- jquery cdn -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- from pano2vr data360/index.html -->
    @include('virtual.head')

    <!-- from pano2vr data360/index.html style-->
    <link rel="stylesheet" href="{{ asset('virtual-asset/data360/css/p2vr_style.css') }}">

    <!-- Bootstrap CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body>
    <!-- pano2vr container -->
    <div id="container" style="width:100%;height:100%;overflow:hidden;">
    </div>
    <!-- pano2vr container -->

    <!-- custom element here -->
    @include('virtual.element')
    <!-- custom element here -->

    <!-- from pano2vr data360/index.html -->
    @include('virtual.body')

    <!-- Bootstrap Javascript -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" 
        integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==" crossorigin="anonymous"
        referrerpolicy="no-referrer">
    </script>

    <script src="https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js"></script>

    <script src="https://www.gstatic.com/firebasejs/8.3.0/firebase-analytics.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.3.0/firebase-messaging.js"></script>
    <!-- custom javascript / jquery function -->
    <script src="{{ asset('virtual-asset/js/index.js') }}" type="text/javascript"></script>
</body>

</html>
