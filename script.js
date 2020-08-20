"use strict"
const 
    apiKey = 'keyj5ElLbaJMTjW0B',
    apiBase = 'apppT47KOL4xfsGi4';

let  APP = new (class{
    constructor(){
        this.width = 1108;
        this.height = 590;
        this.preText = "What are AIDA\nModel Steps &\nHierarchy\nof Effects?";

        this.init();
    }
    init(){
        let canvas = document.querySelector("#canvas");
        canvas.setAttribute("width", this.width);
        canvas.setAttribute("height", this.height);
        this.canvas = canvas;
        this.context = canvas.getContext("2d",{alpha:false});

        this.textarea = document.querySelector("#text");
        this.textarea.value = this.preText;
        document.querySelector("#download").addEventListener("click",(e)=>{
            let link = document.createElement("a");
            link.download = "image.png";
            link.href = canvas.toDataURL();
            link.click();
            URL.revokeObjectURL(link.href);
        })
        
        this.loaded = {
            settings : false,
            backBlur : false,
            logotype : false,
            illustration : false,
            font : false
        }
        this.allLoaded = {
            settings : false,
            compositeBackBlur : false,
            compositeIllustrations : false,
            logotypeLoad : false,
            readyBackBlur : false
        }
        this.logotypeLoaded = {
            size : 0,
            once : false
        }

        this.loadSettings(apiKey, apiBase, ["settings", "backBlur", "logotype", "illustration"]);
        this.loadFont("Kanit","https://fonts.gstatic.com/s/kanit/v6/nKKU-Go6G5tXcr4uPhWnVaE.woff2")
        .then((lf)=>{
            document.fonts.add(lf);
            this.loadDone("Font 'Kanit' loaded!", "font")
        })
    }
    loadSettings(apiKey, apiBase, list){
        let Airtable = require('airtable');
        let base = new Airtable({apiKey: apiKey}).base(apiBase);
        
        for(let outName of list)
            this.baseFetch(base, outName);

    }
    logotypeLoad(){
        for(let record of this.logotype){
            let image = document.createElement("img");

            image.setAttribute("crossorigin","anonymous");
            
            image.onload = (e)=>{
                this.logotypeLoadDone(record, image);
            }
            image.src = record.src[0].url;
        }
    }
    compositeIllustrations(){
        let illustrations = document.querySelector("#illustrations");
        for(let record of this.illustration){
            let li = document.createElement("li"),
                div = document.createElement("div"),
                image = document.createElement("img");

            image.setAttribute("crossorigin","anonymous");
            
            image.onload = (e)=>{
                div.appendChild(image);
                div.classList.add("loaded");
                this.imagesLoadDone(record, image);
                li.addEventListener("click",()=>{
                    this.current.illustration = this.imagesLoaded[record.name];
                    this.draw();
                })
            }
            li.appendChild(div);
            illustrations.appendChild(li);
            image.src = record.src[0].url;
        }
    }
    compositeBackBlur(){
        let colors = document.querySelector("#colors");
        for(let record of this.backBlur){
            let li = document.createElement("li");
            li.style.setProperty("background", `linear-gradient(180deg, #${record.backFirst}, #${record.backLast})`);
            li.addEventListener("click",(e)=>{
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
        let svgContainer = document.createElement("div");
        svgContainer.innerHTML = 
        `<svg id="svgRender" xmlns="http://www.w3.org/2000/svg" width="${this.current.settings.width}" height="${this.current.settings.height}" viewBox="0 0 ${this.current.settings.width} ${this.current.settings.height}" fill="none">
            <g>
                <rect width="${this.current.settings.width}" height="${this.current.settings.height}" fill="url(#paint0_linear)"/>
                <g opacity="0.25" filter="url(#filter0_f)">
                    <path d="M789.065 48.8459C928.594 208.905 939.711 427.57 813.895 537.248C688.079 646.925 358.304 474.067 341.38 330.81C324.456 187.553 346.063 35.5318 471.878 -74.1456C597.694 -183.823 649.536 -111.214 789.065 48.8459Z" fill="#${colorRecord.figure}" style="mix-blend-mode:overlay"/>
                </g>
                <g opacity="0.3" filter="url(#filter0_f)">
                    <ellipse cx="1096.23" cy="-43.8906" rx="254.301" ry="101.703" fill="#${colorRecord.figure}" style="mix-blend-mode:overlay"/>
                </g>
                <g opacity="0.5" filter="url(#filter1_f)">
                    <ellipse cx="294.738" cy="640.958" rx="395.134" ry="91.6316" fill="#${colorRecord.figure}" style="mix-blend-mode:overlay"/>
                </g>
                <g opacity="0.5" filter="url(#filter1_f)">
                    <ellipse cx="895.486" cy="623.745" rx="395.134" ry="74.4185" fill="#${colorRecord.figure}" style="mix-blend-mode:overlay"/>
                </g>
                <g opacity="0.1" filter="url(#filter2_f)">
                    <path d="M94.4983 242.181C163.407 321.229 173.987 424.783 118.13 473.476C62.2722 522.169 54.688 414.96 -131.411 362.883C-200.32 283.835 -187.268 235.91 -131.411 187.217C-75.5535 138.525 25.5895 163.133 94.4983 242.181Z" fill="#${colorRecord.figure}" style="mix-blend-mode:overlay"/>
                </g>
            </g>
            <defs>
                <filter id="filter0_f" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur"/>
                </filter>
                <filter id="filter1_f" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur"/>
                </filter>
                <filter id="filter2_f" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur"/>
                </filter>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="0" y2="590" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#${colorRecord.backFirst}"/>
                    <stop offset="1" stop-color="#${colorRecord.backLast}"/>
                </linearGradient>
            </defs>
        </svg>`;
        
        let blobUrl = "data:image/svg+xml;base64," + btoa((new XMLSerializer()).serializeToString(svgContainer.firstChild)),
            i = new Image(),
            p = new Promise((r,rj)=>{
                i.addEventListener("load",()=>{
                    r(i)
                });
            });

        i.src = blobUrl;
        return p;
    }
    baseFetch(base, outName, baseName = outName, view = "Default", format = (r)=>r.fields, message = `Load ${baseName} done!`){
        let app = this;
        app[outName]=[];
        base(baseName).select({
            view: view
        }).eachPage(function page(records, fetchNextPage) {
        
            records.forEach(function(record){
                app[outName].push(format(record));
            });
            fetchNextPage();
        
        }, function done(err) {
            if (err) { 
                app.error(err);
                return; 
            }
            app.loadDone(message, outName)
        });
    }
    loadDone(message, target){
        this.loaded[target] = true;
        console.log(message);
        (()=>{
            for(let status of Object.values(this.loaded)) if(!status) return;
            console.log("All loaded!");
            this.current = {
                settings : this.settings[0],
                color : this.backBlur[0],
            };
            this.imagesLoaded = {
                size : 0,
                once : false
            };
            this.canvas.setAttribute("width", this.current.settings.width);
            this.canvas.setAttribute("height", this.current.settings.height);
            this.textarea.value = this.current.settings.text
            this.logotypeLoad();
            this.compositeBackBlur();
            this.compositeIllustrations();
            this.renderBack(this.current.color).then((i)=>{
                this.current.readyBackBlur = i;
                this.allDone("readyBackBlur");
            })
            this.allDone("settings");
            delete this.loaded;
        })()
    }
    imagesLoadDone(record, image){
        this.imagesLoaded.size++;
        this.imagesLoaded[record.name] = Object.assign(record, {image: image});
        console.log("Load "+record.name);
        if(!this.imagesLoaded.once){
            this.current.illustration = this.imagesLoaded[record.name];
            this.imagesLoaded.once = true;
            this.allDone("compositeIllustrations");
        }
        if(this.imagesLoaded.size == this.illustration.length){
            console.log("Images Loaded!");
        }
    }
    logotypeLoadDone(record, image){
        this.logotypeLoaded.size++;
        this.logotypeLoaded[record.name] = Object.assign(record, {image: image});
        console.log("Load "+record.name);
        if(!this.logotypeLoaded.once){
            this.current.logotype = this.logotypeLoaded[record.name];
            this.logotypeLoaded.once = true;
            this.allDone("logotypeLoad");
        }
        if(this.logotypeLoaded.size == this.logotype.length){
            console.log("Logotype Loaded!");
        }
    }
    allDone(name){
        this.allLoaded[name] = true;
        console.log("All Done: "+name);
        (()=>{
            for(let status of Object.values(this.allLoaded)) if(!status) return;
            console.log("All Done loaded!");
            this.closePreloader();
            this.draw();
            this.textarea.addEventListener("input",(e)=>{
                this.draw();
            })
        })()
    }
    error(err){
        console.error(err);
    }
    closePreloader(){
        preloader.style.setProperty("display","none");
        content.style.setProperty("display","block");
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
})();