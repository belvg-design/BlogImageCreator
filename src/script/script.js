"use strict"
const 
    defaultIllustration = {
        src:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 746 564"><path d="M346 1c152-3 336-2 387 141 52 149-72 290-205 376a313 313 0 01-350-18C63 420-34 292 11 159 55 30 210 5 346 1z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M101 278L217 65c2-4 5-6 9-7s8-1 11 1l240 147c3 2 6 6 7 9 1 4 0 8-2 12L366 440c-2 4-5 6-9 7-3 1-7 1-10-1L106 299c-3-2-5-6-6-9-1-4-1-8 1-12zm282-76c15 9 21 30 12 47-9 16-29 22-45 12-4-2-7-5-10-9a36 36 0 01-2-38 32 32 0 0145-12zm-225 19l-34 62 64 39 109-31-24-96-115 26zm57 117l135 83 28-51-24-71-139 39z" fill="#7B7B7B"/></svg>',
        descr : "default_image",
        name : "default image",
        x : 554, y : 97,
        image : true
    },
    defaultLogo = {
        src:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="156" height="50" viewBox="0 0 156 50"><path fill="#fff" d="M63.59 23.88h9.5c4.5 0 7.48-1.83 7.48-5.47 0-2.73-1.43-4.07-3.73-4.95 1.43-.8 2.63-2.05 2.63-4.3a4.6 4.6 0 00-1.38-3.44c-1.14-1.14-2.95-1.77-5.21-1.77H63.6l-.01 19.93zM67.87 12V7.8h4.33c1.86 0 2.89.74 2.89 2.05 0 1.54-1.23 2.16-3.17 2.16h-4.05zm0 8.02v-4.37h5.07c2.26 0 3.26.82 3.26 2.16 0 1.53-1.17 2.21-3.11 2.21h-5.22zm16.32 3.86h15.22v-3.91H88.56v-4.18h9.42v-3.9h-9.42V7.84h10.7v-3.9H84.18l.01 19.93zm19.13 0h14.35v-3.99h-9.97V3.95h-4.39l.01 19.93zm20.76.14h3.87l8.1-20.07h-4.75l-5.23 14.03-5.21-14.03H116l8.08 20.07zm23.38.18c3.65 0 6.48-1.42 8.54-3.16V12.4h-8.69v3.78h4.43v2.85a7.02 7.02 0 01-4.14 1.2c-3.54 0-6.05-2.69-6.05-6.33 0-3.45 2.54-6.26 5.73-6.26 2.31 0 3.69.73 5.22 2.03l2.77-3.34c-2.08-1.77-4.26-2.73-7.84-2.73a10.24 10.24 0 00-10.48 10.3c0 5.96 4.29 10.3 10.5 10.3zM63.59 36h.73v-2.85h3.56v-.68h-3.56v-2.34h3.99v-.68h-4.72v6.55zm9.05.1c2 0 3.36-1.57 3.36-3.38a3.3 3.3 0 00-3.34-3.4c-2 0-3.36 1.59-3.36 3.4a3.31 3.31 0 003.34 3.39zm.03-.66c-1.51 0-2.59-1.22-2.59-2.7 0-1.5 1.07-2.7 2.56-2.7 1.51 0 2.6 1.22 2.6 2.7 0 1.5-1.06 2.7-2.57 2.7zm4.9.56h.74v-2.55h1.89L82.1 36h.91L81 33.3c1.03-.19 1.78-.82 1.78-1.9 0-.55-.2-1-.5-1.31a2.56 2.56 0 00-1.88-.66h-2.82v6.55zm.75-3.2v-2.67h2.04c1.06 0 1.68.48 1.68 1.3 0 .85-.71 1.36-1.69 1.36h-2.03zm11.11 3.29c1.31 0 2.25-.73 2.25-1.86 0-1.02-.69-1.55-2.15-1.87-1.44-.32-1.78-.66-1.78-1.28 0-.6.55-1.07 1.4-1.07.68 0 1.28.2 1.9.71l.43-.57a3.4 3.4 0 00-2.3-.81c-1.25 0-2.16.76-2.16 1.79 0 1.1.7 1.58 2.2 1.9 1.38.3 1.7.64 1.7 1.25 0 .67-.58 1.13-1.46 1.13a3.2 3.2 0 01-2.25-.93l-.47.55c.8.72 1.64 1.06 2.69 1.06zm6.4 0c1.64 0 2.74-.98 2.74-2.89v-3.75h-.74v3.8c0 1.44-.77 2.17-1.98 2.17-1.26 0-2.02-.8-2.02-2.2v-3.77h-.73v3.8c-.02 1.86 1.1 2.85 2.73 2.85zm7.5.02c1.2 0 1.94-.43 2.62-1.11l-.48-.52c-.63.6-1.22.95-2.13.95-1.44 0-2.55-1.2-2.55-2.7 0-1.53 1.09-2.7 2.55-2.7.9 0 1.51.37 2.06.9l.49-.53a3.43 3.43 0 00-2.56-1.06 3.31 3.31 0 00-3.32 3.39 3.3 3.3 0 003.31 3.38zm6.74 0c1.19 0 1.94-.43 2.63-1.11l-.48-.52c-.63.6-1.23.95-2.13.95-1.44 0-2.55-1.2-2.55-2.7 0-1.53 1.09-2.7 2.55-2.7.9 0 1.5.37 2.06.9l.48-.53a3.43 3.43 0 00-2.55-1.06 3.31 3.31 0 00-3.33 3.39 3.29 3.29 0 003.32 3.38zm8.7-.11v-.68h-4.05v-2.28h3.6v-.68h-3.6V30.1h4.01v-.68h-4.75v6.56h4.8zm3.77.09c1.3 0 2.24-.73 2.24-1.86 0-1.02-.68-1.55-2.14-1.87-1.44-.32-1.78-.66-1.78-1.28 0-.6.55-1.07 1.4-1.07.67 0 1.28.2 1.9.71l.44-.57a3.43 3.43 0 00-2.31-.81c-1.25 0-2.16.76-2.16 1.79 0 1.1.7 1.58 2.2 1.9 1.38.3 1.72.64 1.72 1.25 0 .67-.59 1.13-1.47 1.13-.91 0-1.57-.32-2.25-.93l-.47.55a3.75 3.75 0 002.68 1.06zm5.91 0c1.31 0 2.25-.73 2.25-1.86 0-1.02-.69-1.55-2.15-1.87-1.44-.32-1.78-.66-1.78-1.28 0-.6.55-1.07 1.4-1.07.68 0 1.28.2 1.9.71l.43-.57a3.43 3.43 0 00-2.31-.81c-1.25 0-2.16.76-2.16 1.79 0 1.1.7 1.58 2.2 1.9 1.38.3 1.7.64 1.7 1.25 0 .67-.58 1.13-1.46 1.13a3.2 3.2 0 01-2.25-.93l-.47.55c.8.72 1.65 1.06 2.7 1.06zm3.75-.1h.74v-2.84h3.56v-.68h-3.56v-2.34h3.99v-.68h-4.73v6.55zm8.79.1c1.64 0 2.74-.98 2.74-2.89v-3.75h-.74v3.8c0 1.44-.77 2.17-1.98 2.17-1.26 0-2.02-.8-2.02-2.2v-3.77h-.73v3.8c0 1.86 1.1 2.85 2.73 2.85zm4.5-.1h4.43v-.67h-3.7v-5.87h-.73v6.55zM68.37 46.36v-.68h-4.05v-2.29h3.6v-.68h-3.6v-2.23h4.01v-.69h-4.75v6.57h4.8zm1.18-2.44h2.61v-.76h-2.6v.76zm7.16 2.56c1.19 0 1.93-.43 2.63-1.11l-.49-.52a2.9 2.9 0 01-2.12.95c-1.44 0-2.56-1.2-2.56-2.7 0-1.53 1.1-2.7 2.56-2.7.89 0 1.5.37 2.06.9l.48-.53a3.42 3.42 0 00-2.55-1.06 3.31 3.31 0 00-3.33 3.39 3.3 3.3 0 003.32 3.38zm6.79 0c2 0 3.35-1.58 3.35-3.4a3.3 3.3 0 00-3.34-3.38c-2 0-3.36 1.58-3.36 3.39a3.3 3.3 0 003.35 3.39zm0-.7c-1.5 0-2.58-1.21-2.58-2.7 0-1.5 1.07-2.7 2.57-2.7 1.5 0 2.58 1.23 2.58 2.7.01 1.51-1.05 2.7-2.56 2.7zm4.93.58h.71v-5.3l2.4 3.5h.05l2.4-3.5v5.3h.73V39.8h-.74l-2.4 3.57-2.4-3.57h-.74l-.01 6.55zm8.14 0h.72v-5.3l2.4 3.5h.03l2.4-3.5v5.3h.74V39.8h-.75l-2.4 3.57-2.4-3.57h-.75l.01 6.55zm8.16 0h4.79v-.68h-4.05v-2.29h3.59v-.68h-3.6v-2.23h4.01v-.69h-4.75l.01 6.57zm6.28 0h.74V43.8h1.88l1.9 2.55h.92l-2.02-2.68c1.03-.2 1.78-.83 1.78-1.91 0-.54-.2-.99-.5-1.32a2.58 2.58 0 00-1.88-.66h-2.81v6.57zm.74-3.22V40.5h2.04c1.05 0 1.67.48 1.67 1.3 0 .85-.7 1.36-1.68 1.36l-2.03-.02zm9.05 3.34c1.2 0 1.95-.43 2.63-1.11l-.48-.52c-.63.6-1.23.95-2.13.95-1.44 0-2.55-1.2-2.55-2.7 0-1.53 1.09-2.7 2.55-2.7.9 0 1.51.37 2.07.9l.49-.53a3.42 3.42 0 00-2.56-1.06 3.31 3.31 0 00-3.32 3.39 3.3 3.3 0 003.3 3.38zm8.72-.12v-.68h-4.05v-2.29h3.59v-.68h-3.6v-2.23h4.01v-.69h-4.75v6.57h4.8z"/><path fill="#fff" fill-rule="evenodd" d="M0 0h51.99v50H0V0zm5.04 5.6c0 .33-.12.59-.4.77-.4.26-.8.28-1.23.29H2.3V1.53h.78l.22-.01c.26-.01.54-.02.76.08.29.12.5.38.5.7 0 .3-.18.6-.47.74-.18.09-.43.1-.67.12v1.45h.11c.34 0 .67 0 1 .16.33.2.52.43.52.83zM14.2 49H1v-5.37l13.18 5.36zM11.12 1.6c1.06 0 1.96.62 2.29 1.6l.07.2H8.72l.06-.2a2.45 2.45 0 012.34-1.6zm16.62-.3c-7.87 7.83-8.03 18.38-.1 26.28 6.84 6.83 16 7.45 23.32 2.07v19.34H30.3l.25-.25-13.97-34.7-6.9 6.86 8.91 20.67-17.57-7.55V8.1h2.3c.77-.02 1.6-.06 2.24-.53.61-.46.98-1.13.98-1.9 0-.92-.5-1.67-1.38-1.95.58-.27.88-.9.88-1.53 0-.42-.14-.83-.4-1.17h2.93a4.04 4.04 0 00-1.42 3.12 3.96 3.96 0 007.5 1.75h-1.77c-.42.42-1.1.68-1.83.68a2.3 2.3 0 01-2.22-1.61l-.07-.2h6.16l.02-.05v-.04c.03-.23.06-.44.06-.65A4 4 0 0013.6 1h2.5V8.1h5.75V6.65h-4.27V1.02h10.45l-.28.27zm14.34 4.34l2.75-4.63h6.14v.22l-11.9 11.85 4.98 4.97 5.17-5.16c2.57 3.07 1.88 6.59-.87 9.33-4.17 4.16-10.29 2.58-14.07-1.2-3.72-3.7-5.53-9.84-1.36-14 2.56-2.54 5.96-2.83 9.16-1.38z" clip-rule="evenodd"/></svg>',
        descr : "default_logo",
        name : "default logo",
        x : 88, y : 79,
        image : true
    },
    defaultBackBlur = {
        backFirst: "6D6D6D",
        backLast: "6B6B6B",
        figure: "A4A4A4",
        name: "default"
    };

function renderPNGfromSVG(src){
    let svgContainer = document.createElement("div");
    svgContainer.innerHTML = src;
    let blobUrl = "data:image/svg+xml;base64," + btoa((new XMLSerializer()).serializeToString(svgContainer.firstChild)),
        i = new Image(),
        p = new Promise((r,rj)=>{
            i.addEventListener("load",()=>{
                r(i)
            });
        });

    i.src = blobUrl;
    return p;
};
renderPNGfromSVG(defaultIllustration.src).then((i)=>defaultIllustration.image = i);
renderPNGfromSVG(defaultLogo.src).then((i)=>defaultLogo.image = i);


let  APP = new (class{
    constructor(){
        this.canvas = document.querySelector("#canvas");
        this.context = canvas.getContext("2d",{alpha:false});

        this.textarea = document.querySelector("#text");
        this.filter = document.querySelector("#filter");
        this.tagsBar = document.querySelector("#tags-bar");
        this.validIllustrations = document.querySelector("#validIllustrations");
        this.illustrations = document.querySelector("#illustrations");
        this.tagsSuggestionBar = document.querySelector("#tags-suggestion-bar");
        this.randomize = document.querySelector("#randomize");

        this.filter.addEventListener("keypress",({code})=>{
            if(code === "Enter" && this.filter.value.trim().length > 0)
                this.setTags(this.filter.value);
        });
        this.filter.addEventListener("input",({code})=>{
            this.updateSuggestions(this.filter.value);
        });
        this.filter.addEventListener("keydown",({code})=>{
            if(code === "Backspace" && this.filter.value.length == 0 && this.tagsBar.childElementCount > 1){
                this.tagsBar.querySelector("button:last-of-type").remove();
                this.countFilterWidth();
            }
        });
        document.querySelector("#download").addEventListener("click",(e)=>{
            let link = document.createElement("a");
            link.download = "image.png";
            link.href = canvas.toDataURL();
            link.click();
            URL.revokeObjectURL(link.href);
        })
        
        this.loaded = {
            settings : false,
            tags : false,
            backBlur : false,
            logotype : false,
            illustration : false,
            font : false
        };
        this.allLoaded = {
            settings : false,
            readyBackBlur : false,
            compositeIllustrations : false,
            compositeBackBlur : false,
            logotypeLoad : false
        };
        this.allLoadedMain = false;
        this.logotypeLoaded = {};
        this.imagesLoaded = {};

        ["settings", "logotype","illustration", "backBlur","tags"].forEach((obj)=>{
            this.loadJSON(`./src/json/${obj}.json`, obj);
        })
        this.loadFont("Kanit","./src/font/Kanit-Bold.ttf")
        .then((lf)=>{
            document.fonts.add(lf);
            this.loadDone("Font 'Kanit' loaded!", "font")
        })
    }
    logotypeLoad(){
        let _current = 0, _counter = 0, _withError = 0,
            _next = ()=>{
                let i = document.createElement("img"),
                    record = this.logotype[_current];
                i.setAttribute("crossorigin","anonymous");
                i.onload = (e)=>{
                    this.logotypeLoaded[record.name] = Object.assign(record, {image: i});
                    //li.addEventListener("click",()=>{})
                    _onLoad();
                }
                i.onerror = (e)=>_onLoad(true);
                i.src = record.src;
            },
            _onLoad = (err)=>{
                _counter += err? (_withError++, 0):1;
                _current++;
                if(_current < this.logotype.length)
                    _next();
                else{
                    //console.log(`Load ${_counter}${_withError?`(${_withError})`:""}`);
                    this.allDone("logotypeLoad");
                }
            };
        _next();
    }
    compositeIllustrations(){
        let _current = 0, _counter = 0, _withError = 0,
            _next = ()=>{
                let i = document.createElement("img"),
                    li = document.createElement("li"),
                    div = document.createElement("div"),
                    record = this.illustration[_current];
                if(record.tags.includes("_hide")) {
                    _onLoad(true);
                    return;
                }

                i.setAttribute("crossorigin","anonymous");
                
                i.onload = (e)=>{
                    this.imagesLoaded[record.name] = Object.assign(record, {image:i, node: li});  
                    i.style.setProperty("left", `${(1 - (this.current.settings.width - record.x)/i.width)*100}%`);
                    i.style.setProperty("top", `${(1 - (this.current.settings.height - record.y)/i.width)*100}%`);
                    div.appendChild(i);
                    div.classList.add("loaded");
                    li.addEventListener("click",(e)=>{
                        let current = document.body.querySelector("ul > li.current")
                        if(current) current.classList.remove("current");
                        this.current.illustration = this.imagesLoaded[record.name];
                        this.draw();
                        li.classList.add("current")
                    }, true);
                    _onLoad();
                }
                i.onerror = (e)=>{
                    _onLoad(true);
                    li.remove();
                }

                li.appendChild(div);
                this.illustrations.appendChild(li);
                i.src = record.src;
            },
            _onLoad = (err)=>{
                _counter += err? (_withError++, 0):1;
                _current++;
                if(_current < this.illustration.length){
                    _next();
                } else{
                    console.log(`Load ${_counter}${_withError?`(${_withError})`:""}`);
                    this.allDone("compositeIllustrations");
                }
            };
        _next();
    }
    compositeBackBlur(){
        let colors = document.querySelector("#colors");
        for(let record of this.backBlur){
            let li = document.createElement("li");
            li.style.setProperty("background", `linear-gradient(90deg, #${record.backFirst}, #${record.backLast})`);
            li.addEventListener("click",(e)=>{
                let current = colors.querySelector(".current");
                if(current) current.classList.remove("current");
                li.classList.add("current");
                this.current.color = record;
                this.renderBack(record)
                .then((i)=>{
                    this.current.readyBackBlur = i;
                    this.draw();
                })
            })
            colors.appendChild(li);
        }
        this.allDone("compositeBackBlur");
    }
    renderBack(colorRecord){
        let src =`<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="${this.current.settings.width}" height="${this.current.settings.height}" viewBox="0 0 ${this.current.settings.width} ${this.current.settings.height}"><path fill="url(#paint0_linear)" d="M0 0h${this.current.settings.width}v${this.current.settings.height}H0z"/><g fill="#${colorRecord.figure}" filter="url(#filter0_f)" opacity=".3"><path d="M789 49c139 160 150 379 24 488-125 110-455-63-472-206s5-295 130-405c126-110 178-37 318 123z"/><ellipse cx="1095.8" cy="-43.9" rx="254.3" ry="101.7"/></g><g fill="#${colorRecord.figure}" filter="url(#filter1_f)" opacity=".5"><ellipse cx="294.3" cy="641" rx="395.1" ry="91.6"/><ellipse cx="895.1" cy="623.7" rx="395.1" ry="74.4"/></g><g filter="url(#filter2_f)" opacity=".1"><path fill="#${colorRecord.figure}" d="M94 242c69 79 80 183 24 231-56 49-64-58-250-110-69-79-56-127 0-176 56-48 157-24 226 55z"/></g><defs><filter id="filter0_f" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur" stdDeviation="100"/></filter><filter id="filter1_f" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur" stdDeviation="50"/></filter><filter id="filter2_f" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur" stdDeviation="60"/></filter><linearGradient id="paint0_linear" x1="0" x2="0" y1="0" y2="590" gradientUnits="userSpaceOnUse"><stop stop-color="#${colorRecord.backFirst}"/><stop offset="1" stop-color="#${colorRecord.backLast}"/></linearGradient></defs></svg>`;
        
        return renderPNGfromSVG(src);
    }
    loadJSON(url, name, format=obj=>obj){
        fetch(url)
        .then(r=>r.json())
        .then(j=>{
            this[name] = format(j);
            this.loadDone(`End fetching: "${url}"`, name)
        });
    }
    loadDone(message, target){
        this.loaded[target] = true;
        console.log(message);
        (()=>{
            for(let status of Object.values(this.loaded)) if(!status) return;
            console.log("Settings loaded!");
            this.current = {
                settings : this.settings[0],
                color : defaultBackBlur,
                illustration : defaultIllustration,
                logotype : defaultLogo
            };
            this.canvas.setAttribute("width", this.current.settings.width);
            this.canvas.setAttribute("height", this.current.settings.height);
            this.textarea.value = this.current.settings.text;
            this.renderBack(this.current.color).then((i)=>{
                this.current.readyBackBlur = i;
                this.allDone("readyBackBlur");
            })
            this.allDone("settings");
            this.compositeIllustrations();
            this.logotypeLoad();
            this.compositeBackBlur();
            delete this.loaded;
        })()
    }
    allDone(name){
        this.allLoaded[name] = true;
        console.log("Loaded: "+name);
        (()=>{
            if(!this.allLoadedMain && (this.allLoaded.settings && this.allLoaded.readyBackBlur)){
                console.log("Main resources loaded. Ready to work!");
                this.allLoadedMain = true;
                this.closePreloader();
                this.draw();
                this.textarea.addEventListener("input",(e)=>{this.draw()})
                this.forRandom = [];
                this.validSet = new Set();
                this.tagsReversed = new Map();
                Object.entries(this.tags).forEach(([i,v])=>this.tagsReversed.set(v,i));
                this.randomize.addEventListener("click",(e)=>{
                    let randomColor = Math.floor(Math.random()*this.backBlur.length);
                    if(this.forRandom.length > 0){
                        this.current.illustration = this.imagesLoaded[this.forRandom[Math.floor(Math.random()*this.forRandom.length)]];
                    }else{
                        this.current.illustration = this.illustration[Math.floor(Math.random()*this.illustration.length)];
                    }
                    this.current.color = this.backBlur[randomColor];
                    this.renderBack(this.current.color)
                    .then((i)=>{
                        this.current.readyBackBlur = i;
                        this.draw();
                    })
                })
            }
            for(let status of Object.values(this.allLoaded)) if(!status) return;
            console.log("All resources loaded!")
            this.defineTags();
            this.updateSuggestions("")
        })()
    }
    error(err){
        console.error(err);
    }
    closePreloader(){
        setTimeout(()=>{
            preloader.style.setProperty("display","none");
            content.style.setProperty("display","flex");
        }, 1000);
    }
    draw(){
        this.context.clearRect(0,0,this.current.settings.width, this.current.settings.height);
        this.context.drawImage(this.current.readyBackBlur, 0,0);
        this.context.drawImage(this.current.logotype.image, this.current.logotype.x, this.current.logotype.y);
        this.context.drawImage(this.current.illustration.image, this.current.illustration.x, this.current.illustration.y);
        this.text(
            this.textarea.value,
            this.current.settings.fontSize,
            this.current.settings.titleColor,
            this.current.settings.textColor,
            this.current.settings.fieldColor,
            this.current.settings.textLeft,
            this.current.settings.textTop,
            this.current.settings.lineHeight);
    }
    text(text, size = 68, titleColor="white", textColor="black", fieldColor="#fff000", x=87, y=531, step=size+3){
        let ctx = this.context,
            out = text.split("\n"),
            i = out.length-1,
            realPhraseQ = size/68,
            addY = Math.ceil(step-55*realPhraseQ);
        ctx.font = `bold ${size}px Kanit, sans-serif`;
        ctx.fillStyle = `${titleColor}`;

        for(let sub of out){
            let y_ = y - step*(i + 1) + addY;
            ctx.fillStyle = `${i+1 == out.length?"#0000":fieldColor}`;
            ctx.fillRect(x-8, y_, this.getRealSize(sub)*realPhraseQ+25, step)
            i--;
        }
        i = out.length-1;
        for(let sub of out){
            let y_ = y - step*i;
            ctx.fillStyle = `${i+1 == out.length?titleColor:textColor}`;
            ctx.fillText(sub, x, y_);
            i--;
        }
    }
    loadFont(name, url){
        let font = new FontFace(name, `url(${url})`);
        return font.load();
    }
    getRealSize(phrase){
        let textSize = document.querySelector("#textSize"),
            len = 0;
        textSize.innerText = phrase;
        return textSize.offsetWidth;
    }
    countFilterWidth(){
        let cs = this.tagsBar.computedStyleMap(),
            width = this.tagsBar.offsetWidth - cs.get("border-left-width").value*2 - cs.get("padding-left").value - cs.get("padding-right").value -1,
            diff = 0;
        this.tagsBar.querySelectorAll("button").forEach((b)=>{
            let margin = b.computedStyleMap().get("margin-right"),
                buttonWidth = b.offsetWidth + (margin.value?margin.value:0);
            if(diff + buttonWidth > width) diff=0;
            diff += buttonWidth;
        })
        let w = width - diff;
        w = w<200?width:w;
        this.filter.style.setProperty("width", `${w}px`);
        this.defineTags();
    }
    defineTags(){
        let buttons = this.tagsBar.querySelectorAll("button:not(.active)"),
            validSet = new Set();
        buttons.forEach(b=>validSet.add(this.tagsReversed.get(b.innerText)));
        this.validSet = validSet;
        this.filterIllustrations(validSet);
    }
    filterIllustrations(validSet){
        this.forRandom = [];
        if(validSet.size == 0)
            this.validIllustrations.style.setProperty("display","none");
        else 
            this.validIllustrations.style.setProperty("display","grid");
    
        this.illustration.forEach(i=>{
            let finded = (()=>{
                for(let t of i.tags) if(validSet.has(t)) return true;
                return false;
            })();
            if(finded){
                i.node.value = "validIllustrations";
                this.validIllustrations.appendChild(i.node);
                this.forRandom.push(i.name);
            } else {
                i.node.value = "illustrations";
                this.illustrations.appendChild(i.node);
            }
            
        })
    }
    setTags(text){
        let button = document.createElement("button"),
            validName = text.trim().toLowerCase().replace("-",""),
            validTag = this.tags[validName],
            elreadyExist = this.validSet.has(validName);
        if(!validTag || elreadyExist)
            return;
        
        button.addEventListener("click", (e)=>{
            e.target.remove();
            this.countFilterWidth();
        });
        button.innerText = validTag || text;
        this.tagsBar.insertBefore(button, this.filter)
        this.filter.value = "";
        this.filter.focus();
        this.countFilterWidth();
        this.updateSuggestions("");

    };
    updateSuggestions(text){
        const max = 7;
        let count = 0;
        text = text.trim().toLowerCase().replace("-","");
        this.tagsSuggestionBar.innerHTML = "";
        if(text.length == 0){
            this.tagsSuggestionBar.style.setProperty("display", "none");
            return;
        };
        this.tagsSuggestionBar.style.setProperty("display", "flex");
        for(let k of Object.keys(this.tags)){
            if(count == max) break;
            if(k.includes(text) && !this.validSet.has(k)){
                let b = document.createElement("button");
                b.innerText = this.tags[k];
                b.addEventListener("click", e=>{
                    this.setTags(b.innerText);
                })
                this.tagsSuggestionBar.appendChild(b);
                count++;
            }
        }
        if(count == 0){
            this.tagsSuggestionBar.style.setProperty("display", "none");
        }
    }
})();