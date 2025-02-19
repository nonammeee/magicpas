<?php
function getMTAData($ip, $port) {
    $sock = fsockopen("udp://$ip", $port, $errno, $errstr, 2);
    if (!$sock) {
        return ["error" => "تعذر الاتصال بالخادم!"];
    }

    fwrite($sock, "s");
    $data = fread($sock, 2048);
    fclose($sock);

    if (!$data) {
        return ["error" => "لم يتم استلام بيانات من الخادم!"];
    }

    $parts = explode("\x00", $data);
    
    return [
        "server_name" => $parts[0] ?? "غير معروف",
        "players" => isset($parts[1]) ? (int)$parts[1] : 0,
        "maxplayers" => isset($parts[2]) ? (int)$parts[2] : 0
    ];
}

$ip = "142.93.97.229";
$port = 22500;
header('Content-Type: application/json');
echo json_encode(getMTAData($ip, $port));
?>
