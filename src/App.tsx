import type { Component, For } from 'solid-js';

import { YoutubeLogo, FilePdf, GitlabLogo, PresentationChart, Globe, Sparkle, TwitterLogo, LinkedinLogo, GoogleLogo, GithubLogo } from "phosphor-solid";

import journal_data from '/src/data/journal.json'
import conf_data from '/src/data/international_conf.json'
import preprint_data from '/src/data/preprint.json'
import competition_data from '/src/data/competition.json'
import talk_data from '/src/data/talk.json'
import advising_data from '/src/data/advising.json'
import teaching_data from '/src/data/teaching.json'

const App: Component = () => {
    return (
        <div class="display_space">
            <section class="hero">
                <div class="hero-body">
                    <p class="title">
                    Luc Libralesso
                    </p>
                    <p class="subtitle">
                    R&D Optimization Engineer
                    </p>
                </div>
            </section>

            <div class="columns profile-presentation">
                <div class="column is-one-fifth">
                    <img class="is-rounded profile-pic" src="/img/pic.jpg" />
                </div>
                <div class="column">
                    <p>
                        I recently defended my Phd thesis in combinatorial optimization.<br/>
                        I mainly work on efficient algorithms for hard combinatorial optimization problems (mostly tree search and dynamic programming algorithms).
                    </p>
                    <div class="social-networks">
                        <a href="https://github.com/librallu/">
                            <button class="button is-text">
                                <GithubLogo size={28} class="text-blue-600"/>
                            </button>
                        </a>
                        <a href="https://twitter.com/librallu/">
                            <button class="button is-text">
                                <TwitterLogo size={28} class="text-blue-600"/>
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/luc-libralesso/">
                            <button class="button is-text">
                                <LinkedinLogo size={28} class="text-blue-600"/>
                            </button>
                        </a>
                        <a href="https://www.researchgate.net/profile/Luc-Libralesso">
                            <button class="button is-text">
                                <b class="text-blue-600">RG</b>
                            </button>
                        </a>
                    </div>
                </div>
            </div>


            <h1 class="text-4xl text-center font-bold">Publications</h1>

            <div class="separator-50"></div>

            <h2 class="text-2xl text-center">Book chapters and journals</h2>
            <div class="cards">
                <For each={journal_data}>{(publi) =>
                    <div>
                        <div class="card card-compact">
                            <div class="card-content">
                                <div class="content">
                                <b>{publi["title"]}</b>
                                <br/>
                                {publi["where"]}
                                <br/>
                                <i>{publi["authors"]}</i>
                                </div>
                            </div>
                            <footer class="card-footer">
                            <For each={publi["actions"]}>{(action) =>
                                <a href={action.link} class="button is-white card-footer-item">
                                    <Switch>
                                        <Match when={action.name == "PDF"}>
                                            <FilePdf size={28} class="mr-2 text-blue-600"/>
                                        </Match>
                                        <Match when={action.name == "Video"}>
                                            <YoutubeLogo size={22} class="mr-2 text-blue-600"/>
                                        </Match>
                                        <Match when={action.name == "code"}>
                                            <GitlabLogo size={22} class="mr-2 text-blue-600"/>
                                        </Match>
                                    </Switch>
                                    <span class="text-blue-600">{action.name}</span>
                                </a>
                            }</For>
                            </footer>
                        </div>
                    </div>
                }</For>
            </div>

            <div class="separator-50"></div>

            <h2 class="text-2xl text-center">International conferences</h2>
            <div class="cards">
                <For each={conf_data}>{(publi) =>
                    <div>
                        <div class="card card-compact">
                            <div class="card-content">
                                <div class="content">
                                <b>{publi["title"]}</b>
                                <br/>
                                {publi["where"]}
                                <br/>
                                <i>{publi["authors"]}</i>
                                </div>
                            </div>
                            <footer class="card-footer">
                            <For each={publi["actions"]}>{(action) =>
                                <a href={action.link} class="button is-white card-footer-item">
                                    <Switch>
                                        <Match when={action.name == "PDF"}>
                                            <FilePdf size={28} class="mr-2 text-blue-600"/>
                                        </Match>
                                        <Match when={action.name == "Video"}>
                                            <YoutubeLogo size={22} class="mr-2 text-blue-600"/>
                                        </Match>
                                        <Match when={action.name == "code"}>
                                            <GitlabLogo size={22} class="mr-2 text-blue-600"/>
                                        </Match>
                                    </Switch>
                                    <span class="text-blue-600">{action.name}</span>
                                </a>
                            }</For>
                            </footer>
                        </div>
                    </div>
                }</For>
            </div>

            <div class="separator-50"></div>

            <h2 class="text-2xl text-center">Preprints</h2>

            <div class="cards">
                <For each={preprint_data}>{(publi) =>
                    <div>
                        <div class="card card-compact">
                            <div class="card-content">
                                <div class="content">
                                <b>{publi["title"]}</b>
                                <br/>
                                <i>{publi["authors"]}</i>
                                </div>
                            </div>
                            <footer class="card-footer">
                            <For each={publi["actions"]}>{(action) =>
                                <a href={action.link} class="button is-white card-footer-item">
                                    <Switch>
                                        <Match when={action.name == "PDF"}>
                                            <FilePdf size={28} class="mr-2 text-blue-600"/>
                                        </Match>
                                        <Match when={action.name == "Video"}>
                                            <YoutubeLogo size={22} class="mr-2 text-blue-600"/>
                                        </Match>
                                        <Match when={action.name == "code"}>
                                            <GitlabLogo size={22} class="mr-2 text-blue-600"/>
                                        </Match>
                                    </Switch>
                                    <span class="text-blue-600">{action.name}</span>
                                </a>
                            }</For>
                            </footer>
                        </div>
                    </div>
                }</For>
            </div>

            <div class="separator-50"></div>

            <h1 class="text-4xl text-center font-bold">PhD thesis</h1>

            <div class="separator-50"></div>

            <div class="card">
                <div class="card-content">
                    <div class="content">
                    <b>Anytime tree search for combinatorial optimization</b>
                    <p>
                        Tree search algorithms are used in a large variety of applications (MIP, CP, SAT, metaheuristics with Ant Colony Optimization and GRASP) and also in AI/planning communities. All of these techniques present similar components and many of those components can be transferred from one community to another. Preliminary results indicate that anytime tree search (search techniques from AI/planning) can be part of the operations research toolbox as they are simple and competitive compared to commonly used metaheuristics in operations research.
                        </p>
                        <p>
                        In this work, we detail a state of the art and a classification of the different tree search techniques that one can find in metaheuristics, exact methods, and AI/planning. Then, we present a generic framework that allows the rapid prototyping of tree search algorithms. Finally, we use this framework to develop anytime tree search algorithms that are competitive with the commonly-used metaheuristics in operations research. We report new tree search applications for some combinatorial optimization problems and new best-known solutions.
                    </p>
                    </div>
                </div>
                <footer class="card-footer">
                    <a href="https://tel.archives-ouvertes.fr/tel-03014697/document" class="button is-white card-footer-item">
                        <FilePdf size={28} class="mr-2 text-blue-600"/>
                        <span class="text-blue-600">PDF</span>
                    </a>
                    <a href="/slides/20_07_thesis_defense.pdf" class="button is-white card-footer-item">
                        <PresentationChart size={28} class="mr-2 text-blue-600"/>
                        <span class="text-blue-600">Slides</span>
                    </a>
                    <a href="https://www.youtube.com/watch?v=m2r5-ffmCFc" class="button is-white card-footer-item">
                        <YoutubeLogo size={28} class="mr-2 text-blue-600"/>
                        <span class="text-blue-600">Video (in french)</span>
                    </a>
                </footer>
            </div>

            <div class="separator-50"></div>

            <h1 class="text-4xl text-center font-bold">Optimization competitions</h1>

            <div class="cards">
                <For each={competition_data}>{(comp) =>
                    <div>
                        <div class="card card-compact">
                            <div class="card-content">
                                <div class="content">
                                <b>{comp["title"]}</b>
                                <br/>
                                <i>{comp["authors"]}</i>
                                <p>{comp["rank"]}</p>
                                </div>
                            </div>
                            <footer class="card-footer">
                            <For each={comp["actions"]}>{(action) =>
                                <a href={action.link} class="button is-white card-footer-item">
                                    <Switch>
                                        <Match when={action.name == "Webpage"}>
                                            <Globe size={28} class="mr-2 text-blue-600"/>
                                        </Match>
                                        <Match when={action.name == "Ceremony"}>
                                            <Sparkle size={28} class="mr-2 text-blue-600"/>
                                        </Match>
                                        <Match when={action.name == "PDF"}>
                                            <FilePdf size={28} class="mr-2 text-blue-600"/>
                                        </Match>
                                        <Match when={action.name == "Video"}>
                                            <YoutubeLogo size={22} class="mr-2 text-blue-600"/>
                                        </Match>
                                        <Match when={action.name == "code"}>
                                            <GitlabLogo size={22} class="mr-2 text-blue-600"/>
                                        </Match>
                                    </Switch>
                                    <span class="text-blue-600">{action.name}</span>
                                </a>
                            }</For>
                            </footer>
                        </div>
                    </div>
                }</For>
            </div>


            <div class="separator-50"></div>

            <h1 class="text-4xl text-center font-bold">Advising</h1>

            <ul><For each={advising_data}>{(advising) =>
                <div class="advising">
                    <b>{advising["name"]}</b><br/>
                    <i>{advising["date"]}</i>, {advising["note"]}<br/>
                    {advising["topic"]}
                </div>
            }</For></ul>

            <div class="separator-50"></div>

            <h1 class="text-4xl text-center font-bold">Teaching</h1>

            <For each={teaching_data}>{(teaching_year) =>
                <div class="teaching_year">
                    <b>{teaching_year["year"]}</b>
                    <For each={teaching_year["items"]}>{(teaching_item) =>
                        <div class="teaching_item">
                            <b>{teaching_item["title"]}</b><br/>
                            [{teaching_item["class"]}], {teaching_item["hours"]} hours, {teaching_item["text"]}<br/>
                            <a href={teaching_item["link"]}>LINK</a>
                        </div>
                    }</For>
                </div>
            }</For>

            <div class="separator-50"></div>

            <h1 class="text-4xl text-center font-bold">Various talks</h1>

            <ul>
            <For each={talk_data}>{(talk) =>
                    <div class="talk">
                        <b>{talk["title"]}</b><br/>
                        <i>{talk["text"]}</i><br/>
                        <For each={talk["actions"]}>{(action) =>
                        <a href={action["link"]}>
                            <Switch>
                                <Match when={action.name == "slides"}>
                                    <PresentationChart size={22} class="mr-2 inline text-blue-600"/>
                                </Match>
                            </Switch>
                            {action["name"]}   
                        </a> 
                        }</For>
                    </div>
            }</For>
            </ul>

            <div class="separator-50"></div>

        </div>
    );
};

export default App;
