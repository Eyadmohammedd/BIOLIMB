// الحصول على عناصر DOM
const strengthSlider = document.getElementById('strength-slider');
const strengthValue = document.getElementById('strength-value');

// إضافة مستمع حدث لتحديث قيمة القوة عند التغيير
strengthSlider.addEventListener('input', () => {
    const value = strengthSlider.value; // الحصول على القيمة الحالية للشريط
    let strengthText; // متغير لتخزين النص المعروض

    // استخدام switch لتحديد النص بناءً على القيمة
    switch (value) {
        case '1':
            strengthText = 'Easy';
            break;
        case '2':
            strengthText = 'Medium';
            break;
        case '3':
            strengthText = 'Hard';
            break;
        default:
            strengthText = 'Unknown'; // حالة افتراضية
    }

    // تحديث النص المعروض
    strengthValue.textContent = `Current Strength: ${strengthText}`;
});