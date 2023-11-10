class Main {
    private _myf:MyFramework;

    main(): void {
        this._myf = new MyFramework();
        let b:HTMLElement = this._myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme click!";
        b.addEventListener("click", this.evento);
        console.log("this en main:");
        console.log(this);
    }

    evento(ev:Event): void {
        console.log("Se hizo click!");
        console.log("this en evento:");
        console.log(this);
    }
}

window.onload = () => {
    let m:Main = new Main();
    m.main();
};