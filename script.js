function copyIP() {
    const ipText = "142.93.97.229:22500";
    navigator.clipboard.writeText(ipText).then(() => {
        alert("✅ تم نسخ عنوان السيرفر!");
    }).catch(err => {
        console.error("خطأ في النسخ:", err);
    });
}

document.getElementById("adminForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // الحصول على القيم المدخلة
    const username = document.getElementById("username").value;
    const discordId = document.getElementById("discordId").value;
    const age = document.getElementById("age").value;
    const reason = document.getElementById("reason").value;
    const experience = document.getElementById("experience").value;

    // رابط Webhook الخاص بـ Discord (ضع الرابط هنا)
    const webhookURL = "";

    // إنشاء رسالة مرسلة إلى الديسكورد بتنسيق JSON
    const payload = {
        content: "**طلب جديد للانضمام للإدارة!** 🚀",
        embeds: [
            {
                title: "تفاصيل الطلب",
                color: 65280, // اللون الأخضر
                fields: [
                    { name: "👤 اسم المستخدم", value: username, inline: true },
                    { name: "📌 معرف ديسكورد", value: discordId, inline: true },
                    { name: "🎂 العمر", value: age, inline: true },
                    { name: "📝 سبب الانضمام", value: reason },
                    { name: "💼 الخبرات السابقة", value: experience }
                ],
                footer: { text: "نظام التقديم للإدارة" }
            }
        ]
    };

    // إرسال الطلب إلى Webhook
    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            alert("✅ تم إرسال الطلب بنجاح!");
            document.getElementById("adminForm").reset();
        } else {
            alert("❌ حدث خطأ أثناء الإرسال!");
        }
    })
    .catch(error => {
        alert("❌ فشل الاتصال بـ Webhook. تأكد من صحة الرابط.");
        console.error(error);
    });
});
