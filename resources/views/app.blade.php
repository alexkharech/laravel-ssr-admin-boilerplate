<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $title }}</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <script defer src="{{ mix('js/app-client.js') }}"></script>
</head>

<body>
    {!! ssr('js/app-server.js')
    ->fallback('<div id="app"></div>')
    ->render() !!}
</body>

</html>
