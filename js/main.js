class Main {
    main() {
        this._myf = new MyFramework();
        let b = this._myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme click!";
        b.addEventListener("click", this.evento);
        console.log("this en main:");
        console.log(this);
    }
    evento(ev) {
        console.log("Se hizo click!");
        console.log("this en evento:");
        console.log(this);
    }
}
window.onload = () => {
    let m = new Main();
    m.main();
};
