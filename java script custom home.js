
const imagePaths = {
    baseMaterial: {
        "18cm Pocket Encasement + Rl": "images/18cm Pocket Encasement + Rl.png",
        "20cm Semi Ortho Foam (D50)": "images/20cm Semi Ortho Foam (D50).png",
        "20cm Ortho Foam (D70)": "images/20cm Ortho Foam (D70).png",
        "20cm Foam (D24)": "images/20cm Foam (D24).png",
        "22cm Pocket Encasement + Rl": "images/22cm Pocket Encasement + Rl.png"
    },
    supportLayer: {
        "4cm Orthopedic (D120)": "images/4cm Orthopedic (D120).png",
        "10cm Semi Orthopedic D50": "images/10cm Semi Orthopedic D50.png",
        "4cm Semi Orthopedic D50": "images/4cm Semi Orthopedic D50.png",
        "15cm Semi Orthopedic D50": "images/15cm Semi Orthopedic D50.png",
        "5cm Semi Orthopedic D50": "images/5cm Semi Orthopedic D50.png",
        "6cm D24": "images/6cm D24.png"
    },
    comfortLayer: {
        "2cm D24": "images/2cm D24.png",
        "2cm R50": "images/2cm R50.png",
        "3cm R50": "images/3cm R50.png",
        "Synth Latex D26 1,5cm": "images/Synth Latex D26 1,5cm.png",
        "Synth Latex D26 2cm": "images/Synth Latex D26 2cm.png",
        "Synth Latex D50 2cm": "images/Synth Latex D50 2cm med.png",
        "Synth Latex D50 5cm": "images/Synth Latex D50 5cm med.png",
        "Memory Foam A Grade (Min Qty 1,6m3) 4cm": "images/Memory Foam A Grade (Min qty 1,6m3) 4cm med.png",
        "Latex A Grade 5cm": "images/Latex A Grade 5cm med.png",
        "Latex B Grade 5cm": "images/Latex B Grade 5cm med.png",
        "Memory Foam B Grade (Min Qty 1,6m3) 4cm": "images/Memory Foam B Grade (Min qty 1,6m3) 4cm med.png"
    },
    layerLast: {
        "2cm D24": "images/2cm D24 ektra.png",
        "2cm R50": "images/2cm R50 ektra.png",
        "3cm R50": "images/3cm R50 ektra.png",
        "Synth Latex D26 1,5cm": "images/Synth Latex D26 1,5cm ektra.png",
        "Synth Latex D26 2cm": "images/Synth Latex D26 2cm ektra.png",
        "Synth Latex D50 2cm": "images/Synth Latex D50 2cm.png",
        "Synth Latex D50 5cm": "images/Synth Latex D50 5cm.png",
        "Memory Foam A Grade (Min Qty 1,6m3) 4cm": "images/Memory Foam A Grade (Min qty 1,6m3) 4cm.png",
        "Latex A Grade 5cm": "images/Latex A Grade 5cm.png",
        "Latex B Grade 5cm": "images/Latex B Grade 5cm.png",
        "Memory Foam B Grade (Min Qty 1,6m3) 4cm": "images/Memory Foam B Grade (Min qty 1,6m3) 4cm.png"
    },
    additionalLayer: {
        "1 Side 5 Cm Quilting Top": "images/1cm Foam.png",
        "1 Side Non Quilting": "images/2cm Foam.png",
        "2 Side 5 Cm Quilting 2X": "images/3cm Foam.png",
        "2 Side 5 Cm Quilting - Non Quilting": "images/4cm Foam.png",
        "2 Side Non Quilting 2X": "images/5cm Foam.png"
    }
};
const prices = {
    baseMaterial: {
        "none": [0, 0, 0, 0, 0, 0],
        "18cm Pocket Encasement + Rl": [3460000, 4120000, 5004000, 5992000, 6176000, 6764000],
        "20cm Semi Ortho Foam (D50)": [3312000, 4416000, 5152000, 5884000, 6620000, 7356000],
        "20cm Ortho Foam (D70)": [4524000, 6028000, 7032000, 8040000, 9044000, 10048000],
        "20cm Foam (D24)": [3688000, 4920000, 5736000, 6556000, 6454000, 8196000],
        "22cm Pocket Encasement + Rl": [3968000, 5080000, 5728000, 6380000, 7032000, 7688000]
    },
    supportLayer: {
        "none": [0, 0, 0, 0, 0, 0],
        "4cm Orthopedic (D120)": [1192000, 1592000, 1856000, 2120000, 2384000, 2648000],
        "10cm Semi Orthopedic D50": [1244000, 1656000, 1932000, 2208000, 2484000, 2760000],
        "4cm Semi Orthopedic D50": [500000, 664000, 776000, 884000, 996000, 1104000],
        "15cm Semi Orthopedic D50": [1864000, 2484000, 2896000, 3312000, 3724000, 4140000],
        "5cm Semi Orthopedic D50": [624000, 828000, 968000, 1104000, 1244000, 1380000],
        "6cm D24": [832000, 1108000, 1292000, 1476000, 1660000, 1844000]
    },
    comfortLayer: {
        "none": [0, 0, 0, 0, 0, 0],
        "2cm D24": [280000, 372000, 432000, 492000, 556000, 616000],
        "2cm R50": [252000, 332000, 388000, 444000, 500000, 552000],
        "3cm R50": [376000, 500000, 580000, 664000, 748000, 828000],
        "Synth Latex D26 1,5cm": [296000, 392000, 456000, 520000, 588000, 652000],
        "Synth Latex D26 2cm": [392000, 520000, 608000, 696000, 780000, 868000],
        "Synth Latex D50 2cm": [512000, 680000, 796000, 908000, 1020000, 1132000],
        "Synth Latex D50 5cm": [1276000, 1700000, 1984000, 2264000, 2548000, 2832000],
        "Memory Foam A Grade (Min Qty 1,6m3) 4cm": [4060000, 5416000, 6316000, 7220000, 8120000, 9024000],
        "Latex A Grade 5cm": [4592000, 6120000, 7140000, 8160000, 9180000, 10200000],
        "Latex B Grade 5cm": [3512000, 4680000, 5460000, 6240000, 7020000, 7800000],
        "Memory Foam B Grade (Min Qty 1,6m3) 4cm": [2848000, 3796000, 4428000, 5060000, 5692000, 6324000]
    },
    layerLast: {
        "none": [0, 0, 0, 0, 0, 0],
        "2cm D24": [280000, 372000, 432000, 492000, 556000, 616000],
        "2cm R50": [252000, 332000, 388000, 444000, 500000, 552000],
        "3cm R50": [376000, 500000, 580000, 664000, 748000, 828000],
        "Synth Latex D26 1,5cm": [296000, 392000, 456000, 520000, 588000, 652000],
        "Synth Latex D26 2cm": [392000, 520000, 608000, 696000, 780000, 868000],
        "Synth Latex D50 2cm": [512000, 680000, 796000, 908000, 1020000, 1132000],
        "Synth Latex D50 5cm": [1276000, 1700000, 1984000, 2264000, 2548000, 2832000],
        "Memory Foam A Grade (Min Qty 1,6m3) 4cm": [4060000, 5416000, 6316000, 7220000, 8120000, 9024000],
        "Latex A Grade 5cm": [4592000, 6120000, 7140000, 8160000, 9180000, 10200000],
        "Latex B Grade 5cm": [3512000, 4680000, 5460000, 6240000, 7020000, 7800000],
        "Memory Foam B Grade (Min Qty 1,6m3) 4cm": [2848000, 3796000, 4428000, 5060000, 5692000, 6324000]
       
    },
    additionalLayer: {
        "none": [0, 0, 0, 0, 0, 0],
        "1 Side 5 Cm Quilting Top": [3364000, 4292000, 4908000, 5528000, 6148000, 6764000],
        "1 Side Non Quilting": [1476000, 1772000, 1972000, 2172000, 2372000, 2568000],
        "2 Side 5 Cm Quilting 2X": [6148000, 8004000, 9240000, 10480000, 11716000, 12952000],
        "2 Side 5 Cm Quilting - Non Quilting": [3988000, 4916000, 5532000, 6152000, 6772000, 7388000],
        "2 Side Non Quilting 2X": [1764000, 2160000, 2424000, 2688000, 2952000, 3216000]
    }
};


// Contoh pemotongan — kamu bisa lanjutkan bagian `prices` dari file aslinya karena terlalu panjang
// atau saya bisa bantu kirimkan bagian lengkapnya juga kalau kamu butuh.

function updateSelection() {
    const base = document.getElementById('baseMaterial').value;
    const support = document.getElementById('supportLayer').value;
    const comfort = document.getElementById('comfortLayer').value;
    const layer = document.getElementById('layerLast').value;
    const extra = document.getElementById('additionalLayer').value;
    const size = parseInt(document.getElementById('size').value);

    document.getElementById('baseMaterialImage').src = imagePaths.baseMaterial[base] || '';
    document.getElementById('supportLayerImage').src = imagePaths.supportLayer[support] || '';
    document.getElementById('comfortLayerImage').src = imagePaths.comfortLayer[comfort] || '';
    document.getElementById('layerLastImage').src = imagePaths.layerLast[layer] || '';
    document.getElementById('additionalLayerImage').src = imagePaths.additionalLayer[extra] || '';

    const total = prices.baseMaterial[base][size] +
                  prices.supportLayer[support][size] +
                  prices.comfortLayer[comfort][size] +
                  prices.layerLast[layer][size] +
                  prices.additionalLayer[extra][size];

    document.getElementById('totalPrice').innerText = `Rp ${total.toLocaleString()}`;
}

function printSelection() {
    const name = prompt("Enter your name:");
    const address = prompt("Enter your address:");
    const phone = prompt("Enter your phone number:");

    const selections = {
        base: document.getElementById('baseMaterial').options[document.getElementById('baseMaterial').selectedIndex].text,
        support: document.getElementById('supportLayer').options[document.getElementById('supportLayer').selectedIndex].text,
        comfort: document.getElementById('comfortLayer').options[document.getElementById('comfortLayer').selectedIndex].text,
        layer: document.getElementById('layerLast').options[document.getElementById('layerLast').selectedIndex].text,
        extra: document.getElementById('additionalLayer').options[document.getElementById('additionalLayer').selectedIndex].text,
        size: document.getElementById('size').options[document.getElementById('size').selectedIndex].text,
        price: document.getElementById('totalPrice').innerText
    };

    const content = `
        <html><head><title>Invoice</title></head><body>
        <h2>Customer: ${name}</h2>
        <p>Address: ${address}</p><p>Phone: ${phone}</p>
        <table border="1">
        <tr><td>Base</td><td>${selections.base}</td></tr>
        <tr><td>Support</td><td>${selections.support}</td></tr>
        <tr><td>Comfort</td><td>${selections.comfort}</td></tr>
        <tr><td>Extra</td><td>${selections.layer}</td></tr>
        <tr><td>Finishing</td><td>${selections.extra}</td></tr>
        <tr><td>Size</td><td>${selections.size}</td></tr>
        <tr><td>Total</td><td>${selections.price}</td></tr>
        </table></body></html>
    `;

    const newWin = window.open('', '', 'width=600,height=400');
    newWin.document.write(content);
    newWin.document.close();
    newWin.print();
}
function simpanPilihanKeLocalStorage() {
    const pilihan = {
        baseMaterial: document.getElementById("baseMaterial").value,
        supportLayer: document.getElementById("supportLayer").value,
        comfortLayer: document.getElementById("comfortLayer").value,
        layerLast: document.getElementById("layerLast").value,
        additionalLayer: document.getElementById("additionalLayer").value,
        size: document.getElementById("size").value,
    };

    const totalPrice = document.getElementById("totalPrice").innerText;
    
    localStorage.setItem("pilihanKasur", JSON.stringify(pilihan));
    localStorage.setItem("totalPrice", totalPrice); // <--- ini penting ditambahkan
}
