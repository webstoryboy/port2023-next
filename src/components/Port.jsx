import React from "react";
import Image from "next/image";

import { portText } from "@/constants";

const Port = () => {
    return (
        <section id="port">
            <div class="port__inner">
                <h2 class="port__title">
                    portfolio <em>포폴 작업물</em>
                </h2>
                <div class="port__wrap">
                    {portText.map((port, key) => (
                        <article class={`port__item p${key+1}`} key={key}>
                            <span class="num">{port.num}.</span>
                            <a href={port.code} target="_blank" class="img">
                                <Image src={port.img} alt={port.name} width={420} height={262} />
                            </a>
                            <h3 class="title">{port.title}</h3>
                            <p class="desc">{port.desc}</p>
                            <a href={port.view} target="_blank" class="site">사이트 보기</a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Port