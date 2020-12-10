function login(){
    var namaPengguna = document.getElementById("namaPengguna").value;
    var kataSandi = document.getElementById("kataSandi").value;

    if (namaPengguna == "pweb_C"){
        if (kataSandi == "123123"){
            alert ("Berhasil Masuk");
            document.getElementById("body").style.backgroundColor = "lightgreen";
        }
        else if(kataSandi == ""){
            alert ("Kata Sandi salah!!!");
            document.getElementById("body").style.backgroundColor = "red";
        }
        else{
            alert("Kata Sandi salah!!!");
            document.getElementById("body").style.backgroundColor = "red";
        }

    }
    else if(namaPengguna == ""){
        alert("Nama Pengguna atau Kata Sandi salah");
        document.getElementById("body").style.backgroundColor = "red";
    }
    else{
        alert("Nama Pengguna atau Kata Sandi salah");
        document.getElementById("body").style.backgroundColor = "red";
    }
}