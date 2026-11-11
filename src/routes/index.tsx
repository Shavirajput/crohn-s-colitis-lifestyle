import type { CSSProperties } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Natural Healing for Crohn’s and Ulcerative Colitis" }] }),
  staticData: { importedDocument: { html: { "lang": "en-US" }, body: { "className": "home page custom-background wp-custom-logo has-background-white singular elementor-kit-6", "data-elementor-device-mode": "desktop", "data-rsssl": "1" } } },
  component: Index,
});

function Index() {
  const [slidePosition0, setSlidePosition0] = useState(null as { index: number; offset: number; maximum: number } | null);
  const slideTrack0 = useRef<HTMLElement | null>(null);
  const moveslideTrack0 = (direction: number) => {
    const track = slideTrack0.current;
    if (!track?.parentElement || getComputedStyle(track).direction !== "ltr") return;
    const slides = Array.from(track.children), first = slides[0]?.getBoundingClientRect(), second = slides[1]?.getBoundingClientRect();
    if (!first || !second) return;
    const step = second.left - first.left;
    if (step <= 0 || first.width <= 0 || slides.some((slide, index) => Math.abs(slide.getBoundingClientRect().width - first.width) > 1 || Math.abs(slide.getBoundingClientRect().left - first.left - index * step) > 2)) return;
    const maximum = Math.max(0, slides[slides.length - 1]!.getBoundingClientRect().right - first.left - track.parentElement.clientWidth);
    const transform = getComputedStyle(track).transform;
    const initial = Math.round(-(transform === "none" ? 0 : new DOMMatrixReadOnly(transform).m41) / step);
    setSlidePosition0(current => { const index = Math.max(0, Math.min(Math.ceil(maximum / step), (current?.index ?? initial) + direction)); return { index, offset: Math.min(maximum, index * step), maximum }; });
  };
  useEffect(() => { moveslideTrack0(0); const resize = () => moveslideTrack0(0); window.addEventListener("resize", resize); return () => window.removeEventListener("resize", resize); }, []);
  // Floating intro video: "bubble" (GIF teaser), "video" (playing with sound), "hidden" (minimised).
  const [introVideo, setIntroVideo] = useState<"bubble" | "video" | "hidden">("bubble");
  const introVideoEl = useRef<HTMLVideoElement | null>(null);
  const openIntroVideo = () => {
    setIntroVideo("video");
    const video = introVideoEl.current;
    if (video) { video.muted = false; video.currentTime = 0; void video.play().catch(() => {}); }
  };
  const closeIntroVideo = () => { introVideoEl.current?.pause(); setIntroVideo("bubble"); };
  useImportedLayout();
  return (
    <>
      <style>{capturedCSS}</style>
    <style>{"[data-import-track-0=\"active\"]{transform:translateX(var(--import-slide-offset))!important;transition-duration:300ms!important}@media(prefers-reduced-motion:reduce){[data-import-track-0=\"active\"]{transition-duration:0ms!important}}"}</style>
      <ImportedHeader />
      <div className="elementor elementor-13003" data-elementor-id="13003">
        <div className="elementor-element elementor-element-6d72d7a e-flex e-con-boxed e-con e-parent e-lazyloaded">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-3446a10 e-con-full e-flex e-con">
              <div className="elementor-element elementor-element-174a21d e-con-full e-flex e-con">
                <div className="elementor-element elementor-element-4453767 elementor-view-default elementor-widget elementor-widget-icon">
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-wrapper">
                      <div className="elementor-icon">
                        <i className="fas fa-circle" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-c297ec9 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default">#1 Results Driven IBD Consulting Firm Globally</p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-1953c92 elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">We Build Your 100% Personalized Strategy for <i><b style={{ color: "rgb(194, 164, 59)" }}>Crohn’s/Colitis</b></i> and Other Forms of IBD</h1>
                </div>
              </div>
              <div className="elementor-element elementor-element-0374d59 elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <p className="elementor-heading-title elementor-size-default">Holistically reversing IBD symptoms since 2016 no matter your unique experience</p>
                </div>
              </div>
              <div className="elementor-element elementor-element-c8c9120 elementor-align-center elementor-mobile-align-center elementor-widget elementor-widget-button [width:100%]">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a className="elementor-button elementor-size-sm" href="https://www.cclworkshop.com/apply?el=website" target="_blank">
                      <span className="elementor-button-content-wrapper">{"\n\t\t\t\t\t\t"}<span className="elementor-button-icon">{"\n\t\t\t\t"}<i className="fas fa-long-arrow-alt-right" aria-hidden="true" />{"\t\t\t"}</span>{"\n\t\t\t\t\t\t\t\t\t"}<span className="elementor-button-text">Book Your Free IBD Session</span>{"\n\t\t\t\t\t"}</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-7156018 e-con-full e-flex e-con">
                <div className="elementor-element elementor-element-4856451 e-con-full e-flex e-con">
                  <div className="elementor-element elementor-element-aac07aa elementor-widget elementor-widget-counter">
                    <div className="elementor-widget-container">
                      <div className="elementor-counter items-stretch gap-[15px] justify-center">
                        <div className="elementor-counter-title items-center justify-center [@media(max-width:1024px)]:justify-center [@media(max-width:767px)]:justify-center">Client served worldwide</div>
                        <div className="elementor-counter-number-wrapper"><span className="elementor-counter-number-prefix whitespace-pre-wrap [flex-grow:var(--counter-prefix-grow,1)]" /><span className="elementor-counter-number [flex-grow:var(--counter-number-grow,0)]">4,000</span><span className="elementor-counter-number-suffix whitespace-pre-wrap [flex-grow:var(--counter-suffix-grow,1)]">+</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-1081325 e-con-full e-flex e-con">
                  <div className="elementor-element elementor-element-0585b37 elementor-widget elementor-widget-counter">
                    <div className="elementor-widget-container">
                      <div className="elementor-counter items-stretch gap-[15px] justify-center">
                        <div className="elementor-counter-title items-center justify-center [@media(max-width:1024px)]:justify-center [@media(max-width:767px)]:justify-center">Refining the S.H.I.E.L.D. method</div>
                        <div className="elementor-counter-number-wrapper"><span className="elementor-counter-number-prefix whitespace-pre-wrap [flex-grow:var(--counter-prefix-grow,1)]" /><span className="elementor-counter-number [flex-grow:var(--counter-number-grow,0)]">12</span><span className="elementor-counter-number-suffix whitespace-pre-wrap [flex-grow:var(--counter-suffix-grow,1)]">+ yrs</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-e20788c e-con-full e-flex e-con">
                  <div className="elementor-element elementor-element-b39551c elementor-widget elementor-widget-counter">
                    <div className="elementor-widget-container">
                      <div className="elementor-counter items-stretch gap-[15px] justify-center">
                        <div className="elementor-counter-title items-center justify-center [@media(max-width:1024px)]:justify-center [@media(max-width:767px)]:justify-center">IBD testimonies</div>
                        <div className="elementor-counter-number-wrapper"><span className="elementor-counter-number-prefix whitespace-pre-wrap [flex-grow:var(--counter-prefix-grow,1)]" /><span className="elementor-counter-number [flex-grow:var(--counter-number-grow,0)]">750</span><span className="elementor-counter-number-suffix whitespace-pre-wrap [flex-grow:var(--counter-suffix-grow,1)]">+</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-309cc74 elementor-view-stacked elementor-widget__width-auto elementor-fixed elementor-shape-square animated-slow elementor-widget elementor-widget-icon animated fadeIn bottom-[186px] [width:auto]" style={introVideo === "bubble" ? undefined : { display: "none" }}>
                <div className="elementor-widget-container">
                  <div className="elementor-icon-wrapper">
                    <a className="elementor-icon [fill:rgb(255,255,255)]" href="#" role="button" aria-label="Hide intro video" onClick={(event) => { event.preventDefault(); setIntroVideo("hidden"); }}>
                      <i className="fas fa-minus" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-f5494a6 elementor-widget__width-auto elementor-fixed elementor-widget elementor-widget-image animated slideInUp bottom-[29px] [width:auto]" style={introVideo === "bubble" ? undefined : { display: "none" }}>
                <div className="elementor-widget-container">
                  <a href="#" role="button" aria-label="Play intro video from Dane" onClick={(event) => { event.preventDefault(); openIntroVideo(); }}>
                    <img className={"attachment-full \x73ize-full"} decoding="async" width="166" height="214" src="/site-assets/ce088d1ecca07051.gif" alt="" />
                  </a>
                </div>
              </div>
              <div className="elementor-element elementor-element-493a58d elementor-view-stacked elementor-widget__width-auto elementor-fixed close-icon elementor-shape-circle elementor-widget elementor-widget-icon [width:auto]" style={introVideo === "video" ? { display: "block" } : undefined}>
                <div className="elementor-widget-container">
                  <div className="elementor-icon-wrapper">
                    <a className="elementor-icon [fill:rgb(255,255,255)]" href="#" role="button" aria-label="Close intro video" onClick={(event) => { event.preventDefault(); closeIntroVideo(); }}>
                      <i className="fas fa-times" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-36a0533 elementor-widget__width-initial elementor-fixed slide-video elementor-widget elementor-widget-video bottom-[20px]" style={introVideo === "video" ? { display: "block" } : undefined}>
                <div className="elementor-widget-container [box-shadow:rgba(0,0,0,0.73)_0px_0px_26px_0px]">
                  <div className="elementor-wrapper elementor-open-inline [aspect-ratio:var(--video-aspect-ratio)]">
                    <video ref={introVideoEl} className="elementor-video object-cover" src="https://crohnscolitislifestyle.com/wp-content/uploads/2022/12/Video-Final.mp4" loop controls preload="metadata" playsInline muted {...({ controlslist: "nodownload" } as any)} />
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-c922c81 elementor-align-justify elementor-widget__width-auto elementor-fixed slide-btn elementor-widget elementor-widget-button [width:auto]">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a className="elementor-button elementor-size-xl" href="https://www.cclworkshop.com/apply?el=website" target="_blank">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">Book Free Discovery Call</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-10c56b1 e-flex e-con-boxed e-con e-parent e-lazyloaded">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-b68a649 e-con-full e-flex e-con">
              <div className="elementor-element elementor-element-65291d4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                <div className="elementor-widget-container">
                  <div className="elementor-divider">
                    <span className="elementor-divider-separator [direction:ltr]">{"\n\t\t\t\t\t\t"}</span>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-e341763 elementor-widget__width-initial elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <p className="elementor-heading-title elementor-size-default">AS FEATURED on</p>
                </div>
              </div>
              <div className="elementor-element elementor-element-1080c29 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                <div className="elementor-widget-container">
                  <div className="elementor-divider">
                    <span className="elementor-divider-separator [direction:ltr]">{"\n\t\t\t\t\t\t"}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-76265b4 e-con-full e-flex e-con">
              <div className="elementor-element elementor-element-5c9424d as-seen-logos elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <img className={"attachment-full \x73ize-full [filter:brightness(0)_invert(1)]"} loading="lazy" decoding="async" width="341" height="221" src="/site-assets/4d37aeac29b74578.png" alt="" srcSet="/site-assets/4d37aeac29b74578.png 341w, /site-assets/5b464c3bc08845dd.png 768w, /site-assets/f427866bd75aaaaf.png 600w" sizes="(max-width: 341px) 100vw, 341px" />
                </div>
              </div>
              <div className="elementor-element elementor-element-888e024 as-seen-logos elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <img className={"attachment-full \x73ize-full [filter:brightness(0)_invert(1)]"} loading="lazy" decoding="async" width="1085" height="283" src="/site-assets/059fe4ad32dcc64e.png" alt="" srcSet="/site-assets/059fe4ad32dcc64e.png 1085w, /site-assets/dbd020bc480d3f18.png 300w, /site-assets/a479848028b117c1.png 1024w, /site-assets/abd7b2fb819fa802.png 768w" sizes="(max-width: 1085px) 100vw, 1085px" />
                </div>
              </div>
              <div className="elementor-element elementor-element-b0d639c as-seen-logos elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <img className={"attachment-full \x73ize-full [filter:brightness(0)_invert(1)]"} loading="lazy" decoding="async" width="2048" height="795" src="/site-assets/14883ea8e07c6f2c.webp" alt="" srcSet="/site-assets/14883ea8e07c6f2c.webp 2048w, /site-assets/e3f298d5dd71a159.webp 300w, /site-assets/bb7cebd11f522e91.webp 1024w, /site-assets/d708a8ee8c0f57ec.webp 768w, /site-assets/d1ce9d6135332a77.webp 1536w, /site-assets/ad67fb0608523ba1.webp 1568w" sizes="(max-width: 2048px) 100vw, 2048px" />
                </div>
              </div>
              <div className="elementor-element elementor-element-86f12f0 as-seen-logos elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <img className={"attachment-full \x73ize-full [filter:brightness(0)_invert(1)]"} loading="lazy" decoding="async" width="540" height="140" src="/site-assets/a00a728154554146.webp" alt="" srcSet="/site-assets/a00a728154554146.webp 540w, /site-assets/72328fe12d0cd73a.webp 300w" sizes="(max-width: 540px) 100vw, 540px" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-ff5bc13 e-flex e-con-boxed e-con e-parent e-lazyloaded">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-72e4d8a e-con-full e-flex e-con">
              <div className="elementor-element elementor-element-d117cac elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <picture className={"attachment-full \x73ize-full"} {...({ loading: "lazy", decoding: "async" } as any)}>
                    <source type="image/webp" srcSet="/site-assets/8482cbdbee36ac31.webp 600w, /site-assets/a5b27a904f66f713.webp 300w" sizes="(max-width: 600px) 100vw, 600px" />
                    <img loading="lazy" decoding="async" width="600" height="509" src="/site-assets/e86ad51ab8cfd4ee.png" alt="" srcSet="/site-assets/e86ad51ab8cfd4ee.png 600w, /site-assets/9009462525b1ad18.png 300w" sizes="(max-width: 600px) 100vw, 600px" />
                  </picture>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-a7277b1 e-con-full e-flex e-con">
              <div className="elementor-element elementor-element-71585cb e-con-full e-flex e-con">
                <div className="elementor-element elementor-element-3555fe2 elementor-view-default elementor-widget elementor-widget-icon">
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-wrapper">
                      <div className="elementor-icon">
                        <i className="fas fa-circle" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-da4a7ec elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default">Free Guide from Dane
      </p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-b8b9d25 elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">6 Tips to Healing <i><b style={{ color: "rgb(194, 164, 59)" }}>Crohn’s &amp; Colitis</b></i> </h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-e9c4c8e elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <p className="elementor-heading-title elementor-size-default">DOWNLOAD DANE’S GUIDE TO LIVING A SYMPTOM-FREE LIFESTYLE
      </p>
                </div>
              </div>
              <div className="elementor-element elementor-element-181fdd2 elementor-widget">
                <div className="elementor-widget-container">
                  <div className="ep-iFrameContainer" style={{ borderRadius: "4px", display: "block" }} id="inline-1TONI4aFMHMcVQbZc9zA-div">
                    <div className="ep-wrapper [width:100%]" style={{ borderRadius: "4px" }} id="inline-1TONI4aFMHMcVQbZc9zA-wrapper">
                      <iframe src="https://api.leadconnectorhq.com/widget/form/1TONI4aFMHMcVQbZc9zA" className="h-[515px] md:h-[307px]" style={{ width: "100%", border: "none", borderRadius: "4px", display: "block" }} id="inline-1TONI4aFMHMcVQbZc9zA" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-activation-type="alwaysActivated" data-deactivation-type="neverDeactivate" data-form-name="[Website] 6 tips ebook" data-height="400" data-layout-iframe-id="inline-1TONI4aFMHMcVQbZc9zA" data-form-id="1TONI4aFMHMcVQbZc9zA" title="Download the free 6 Tips to Healing Crohn's & Colitis guide" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-8da23f9 e-flex e-con-boxed e-con e-parent e-lazyloaded">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-de9062c e-con-full e-flex e-con">
              <div className="elementor-element elementor-element-7955d5e e-con-full e-flex e-con">
                <div className="elementor-element elementor-element-8ca6e11 elementor-view-default elementor-widget elementor-widget-icon">
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-wrapper">
                      <div className="elementor-icon">
                        <i className="fas fa-circle" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-2494d85 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default">Our Mission &amp; MEET THE TEAM
      </p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-16c86d6 elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">Personalized Natural Healing for Crohn’s Disease and Ulcerative Colitis
      </h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-2a03cef elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  <p>Our mission is to serve as your go-to education portal, community, and innovative leader in the fight against Inflammatory Bowel Disease.</p>
                  <p>We have successfully helped thousands of people with IBD reclaim their preferred lifestyles and freedoms. Our diverse clientele ranges from youth and post-surgery patients to those on medication and individuals facing extreme cases, all over the world and with various symptoms.</p>
                  <p>As fellow warriors who have battled Crohn’s and Colitis ourselves, we understand the uncertainties and frustrations that come with this disease, including the crippling costs of medical bills for solutions that often leave you feeling disempowered. We recognize how overwhelming it can be to manage symptoms, which is why our goal is to eliminate the fear and intimidation often associated with IBD. Our program is designed to seamlessly integrate into your lifestyle, enabling you to live freely, energetically, and on your own terms—without the burden of expensive medications, long-term commitments, or complicated treatments.</p>
                  <p>If you’re suffering from IBD, ulcerative colitis, Crohn’s disease, or other gut-related issues, rest assured that you’re not alone. We’re here to help you discover the answers you’re seeking, along with a personalized action plan for rapid and effective gut healing.</p>
                  <p>Now is the time to take control of your diagnosis and feel empowered once more. Crohn’s and Colitis don’t have to define you—they can lead you to a path of self-discovery and self-care that transforms your life for the better. Join us on this journey, and let’s turn your challenges into opportunities for growth and healing.</p>
                </div>
              </div>
              <div className="elementor-element elementor-element-2c6f4cb elementor-align-left elementor-mobile-align-center elementor-tablet-align-center elementor-widget elementor-widget-button [width:100%]">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a className="elementor-button elementor-size-sm" href="https://www.cclworkshop.com/apply?el=website" target="_blank">
                      <span className="elementor-button-content-wrapper">{"\n\t\t\t\t\t\t"}<span className="elementor-button-icon">{"\n\t\t\t\t"}<i className="fas fa-long-arrow-alt-right" aria-hidden="true" />{"\t\t\t"}</span>{"\n\t\t\t\t\t\t\t\t\t"}<span className="elementor-button-text">Book Your Free IBD Session</span>{"\n\t\t\t\t\t"}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-5be1ac3 e-con-full e-flex e-con">
              <div className="elementor-element elementor-element-230693e e-con-full e-flex e-con">
                <div className="elementor-element elementor-element-e726659 elementor-widget elementor-widget-image">
                  <div className="elementor-widget-container">
                    <picture className={"attachment-large \x73ize-large wp-image-8588"} {...({ loading: "lazy", decoding: "async" } as any)}>
                      <source type="image/webp" srcSet="/site-assets/5e376aa8d77004a1.webp 300w, /site-assets/edf8598edba49b73.webp 150w" sizes="(max-width: 300px) 100vw, 300px" />
                      <img loading="lazy" decoding="async" width="300" height="300" src="/site-assets/cfb1dba7fec9df4d.jpg" alt="" srcSet="/site-assets/cfb1dba7fec9df4d.jpg 300w, /site-assets/2ba0ab84ea3ab586.jpg 150w" sizes="(max-width: 300px) 100vw, 300px" />
                    </picture>
                  </div>
                </div>
                <div className="elementor-element elementor-element-9b2cc4a elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Dane Johnson, CHN</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-8116f6b elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default">CEO/Founder - Crohn’s/Colitis</p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-eb8f1ab e-con-full e-flex e-con">
                <div className="elementor-element elementor-element-9791c87 elementor-widget elementor-widget-image">
                  <div className="elementor-widget-container">
                    <img className={"attachment-large \x73ize-large"} loading="lazy" decoding="async" width="695" height="695" src="/site-assets/9897bb759feafe83.jpg" alt="" srcSet="/site-assets/9897bb759feafe83.jpg 695w, /site-assets/d1f30404ae071548.jpg 300w, /site-assets/f42a3b695550fce1.jpg 150w" sizes="(max-width: 695px) 100vw, 695px" />
                  </div>
                </div>
                <div className="elementor-element elementor-element-03f52a9 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Dr. Asia Muhammad, ND</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-2d4b8c0 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default">Coach Manager</p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-ee752d3 e-con-full e-flex e-con">
                <div className="elementor-element elementor-element-1d047f8 elementor-widget elementor-widget-image">
                  <div className="elementor-widget-container">
                    <picture className={"attachment-large \x73ize-large"} {...({ loading: "lazy", decoding: "async" } as any)}>
                      <source type="image/webp" srcSet="/site-assets/d0316d2098252360.webp 487w, /site-assets/9310188be7788011.webp 300w" sizes="(max-width: 487px) 100vw, 487px" />
                      <img loading="lazy" decoding="async" width="487" height="478" src="/site-assets/a1b7b28f7a79c094.jpg" alt="" srcSet="/site-assets/a1b7b28f7a79c094.jpg 487w, /site-assets/f3b5e5037449db5a.jpg 300w" sizes="(max-width: 487px) 100vw, 487px" />
                    </picture>
                  </div>
                </div>
                <div className="elementor-element elementor-element-d2845be elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Dr. Chao, NMD, DC, LAc</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-74088e6 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default">USA Coach - Undiagnosed</p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-f54d7bd e-con-full e-flex e-con">
                <div className="elementor-element elementor-element-ccb4bd3 elementor-widget elementor-widget-image">
                  <div className="elementor-widget-container">
                    <picture className={"attachment-large \x73ize-large"} {...({ loading: "lazy", decoding: "async" } as any)}>
                      <source type="image/webp" srcSet="/site-assets/aa7bf59cddea4ba3.webp 500w, /site-assets/ed4be561e2148b58.webp 300w, /site-assets/28568d96ffde7e9f.webp 150w" sizes="(max-width: 500px) 100vw, 500px" />
                      <img loading="lazy" decoding="async" width="500" height="500" src="/site-assets/50abaa687981eb18.jpg" alt="" srcSet="/site-assets/50abaa687981eb18.jpg 500w, /site-assets/b316500632f5064a.jpg 300w, /site-assets/4ef344624aba0c64.jpg 150w" sizes="(max-width: 500px) 100vw, 500px" />
                    </picture>
                  </div>
                </div>
                <div className="elementor-element elementor-element-0451eb7 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Coach Taryn, R.N., CFN
      </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-9a32d23 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default">USA Coach - Crohn’s Disease</p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-60a56cc e-con-full e-flex e-con">
                <div className="elementor-element elementor-element-3958d58 elementor-widget elementor-widget-image">
                  <div className="elementor-widget-container">
                    <picture className={"attachment-large \x73ize-large"} {...({ loading: "lazy", decoding: "async" } as any)}>
                      <source type="image/webp" srcSet="/site-assets/a6cf1b48e5010ae5.webp 500w, /site-assets/f7a2610d158fd4f9.webp 300w, /site-assets/c17c9c20fcab11c1.webp 150w" sizes="(max-width: 500px) 100vw, 500px" />
                      <img loading="lazy" decoding="async" width="500" height="500" src="/site-assets/acadbcb811188e5c.jpg" alt="" srcSet="/site-assets/acadbcb811188e5c.jpg 500w, /site-assets/89fe91b397c54f6b.jpg 300w, /site-assets/1e99ad2c9f851111.jpg 150w" sizes="(max-width: 500px) 100vw, 500px" />
                    </picture>
                  </div>
                </div>
                <div className="elementor-element elementor-element-fe1a5fa elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Coach Taylor, MSCN, RH</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-fafeed0 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default">USA Coach - Crohn’s Disease</p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-fc6b3ac e-con-full e-flex e-con">
                <div className="elementor-element elementor-element-aecd4e1 elementor-widget elementor-widget-image">
                  <div className="elementor-widget-container">
                    <picture className={"attachment-large \x73ize-large"} {...({ loading: "lazy", decoding: "async" } as any)}>
                      <source type="image/webp" srcSet="/site-assets/5e8b5df0cdd9b5ae.webp 500w, /site-assets/56aa4f9c314024db.webp 300w, /site-assets/0435eaaa22629298.webp 150w" sizes="(max-width: 500px) 100vw, 500px" />
                      <img loading="lazy" decoding="async" width="500" height="500" src="/site-assets/587d08c81769ea71.jpg" alt="" srcSet="/site-assets/587d08c81769ea71.jpg 500w, /site-assets/441c07f666271d68.jpg 300w, /site-assets/3dc3896a49874569.jpg 150w" sizes="(max-width: 500px) 100vw, 500px" />
                    </picture>
                  </div>
                </div>
                <div className="elementor-element elementor-element-4e1aaf1 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Coach Arman, CHN</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-95db7d5 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default">International Coach - U.C</p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-f39124f e-con-full e-flex e-con">
                <div className="elementor-element elementor-element-6027866 elementor-widget elementor-widget-image">
                  <div className="elementor-widget-container">
                    <picture className={"attachment-large \x73ize-large"} {...({ loading: "lazy", decoding: "async" } as any)}>
                      <source type="image/webp" srcSet="/site-assets/b16419bca5723db6.webp 500w, /site-assets/aa6d1d8f2357d99a.webp 300w, /site-assets/17c6c8da50e2ee07.webp 150w" sizes="(max-width: 500px) 100vw, 500px" />
                      <img loading="lazy" decoding="async" width="500" height="500" src="/site-assets/ef064f1546dc2aa2.png" alt="" srcSet="/site-assets/ef064f1546dc2aa2.png 500w, /site-assets/dd8e2e229191bb3f.png 300w, /site-assets/8e231554d9c643e0.png 150w" sizes="(max-width: 500px) 100vw, 500px" />
                    </picture>
                  </div>
                </div>
                <div className="elementor-element elementor-element-f0551c5 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Coach Linsy, CHN</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-3b90a1f elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default">USA Coach - U.C, Lyme, Asthma</p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-cbdd248 e-con-full e-flex e-con">
                <div className="elementor-element elementor-element-e36c5dc elementor-widget elementor-widget-image">
                  <div className="elementor-widget-container">
                    <picture className={"attachment-large \x73ize-large"} {...({ loading: "lazy", decoding: "async" } as any)}>
                      <source type="image/webp" srcSet="/site-assets/7474bb25656a14c9.webp 500w, /site-assets/64ea1d027561e184.webp 300w" sizes="(max-width: 500px) 100vw, 500px" />
                      <img loading="lazy" decoding="async" width="500" height="459" src="/site-assets/484cd7fb09437e01.png" alt="" srcSet="/site-assets/484cd7fb09437e01.png 500w, /site-assets/1d0f3044332b1df7.png 300w" sizes="(max-width: 500px) 100vw, 500px" />
                    </picture>
                  </div>
                </div>
                <div className="elementor-element elementor-element-5d0e219 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Coach Dominique, ND
      </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-5adfa19 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default">Canadian Coach - U.C.</p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-60629a9 e-con-full e-flex e-con">
                <div className="elementor-element elementor-element-fd38f9a elementor-widget elementor-widget-image">
                  <div className="elementor-widget-container">
                    <img className={"attachment-large \x73ize-large"} loading="lazy" decoding="async" width="512" height="521" src="/site-assets/b7468d7bc980b6b8.webp" alt="Coach Michael - Crohn's Colitis Lifestyle" srcSet="/site-assets/b7468d7bc980b6b8.webp 512w, /site-assets/6301884d50239f62.webp 295w" sizes="(max-width: 512px) 100vw, 512px" />
                  </div>
                </div>
                <div className="elementor-element elementor-element-553b40c elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Coach Michael, CFNC</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-4cc8a2a elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default">USA Coach - Crohn’s/Colitis</p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-2d785e7 e-con-full e-flex e-con">
                <div className="elementor-element elementor-element-f095bbf elementor-widget elementor-widget-image">
                  <div className="elementor-widget-container">
                    <picture className={"attachment-large \x73ize-large"} {...({ loading: "lazy", decoding: "async" } as any)}>
                      <source type="image/webp" srcSet="/site-assets/6da2f7d2c86bbf72.webp 400w, /site-assets/f826e14efa5fcf45.webp 300w, /site-assets/4bbefb3de54aef78.webp 150w" sizes="(max-width: 400px) 100vw, 400px" />
                      <img loading="lazy" decoding="async" width="400" height="400" src="/site-assets/9be7bcb3af4d4d93.jpg" alt={"Coach Jon - Crohn&apos;s Colitis Lifestyle"} srcSet="/site-assets/9be7bcb3af4d4d93.jpg 400w, /site-assets/4ed6fa49f2e17952.jpg 300w, /site-assets/22938123d77d40c1.jpg 150w" sizes="(max-width: 400px) 100vw, 400px" />
                    </picture>
                  </div>
                </div>
                <div className="elementor-element elementor-element-887e248 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Coach Jon, HHC</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-9b5bf0f elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default">Senior Coach -  Crohn’s Disease</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-aa7dac9 e-flex e-con-boxed e-con e-parent e-lazyloaded">
          <div className="e-con-inner">
            <div className="elementor-element elementor-widget">
              <div className="elementor-widget-container">
                <div className="elementor-shortcode">
                  <section className="gutensuite-reviewkit-wrap [container-type:inline-size]">
                    <header className="gutensuite-reviewkit-header items-center gap-y-[10px]">
                      <div className="gutensuite-reviewkit-header__top items-center gap-[10px]">
                        <h2 className="gutensuite-reviewkit-header__title">Excellent</h2>
                        <img className="gutensuite-reviewkit-header__rating-image" decoding="async" src="/site-assets/5b51cf01ee219027-660a288058f87e3d69a83997a41b126d.png" alt="Trustpilot rating" />
                      </div>
                      <div className="gutensuite-reviewkit-header__bottom items-center gap-[5px]">
                        <div className="gutensuite-reviewkit-header__stats"><span className="gutensuite-reviewkit-header__rated">Rated</span><span className="gutensuite-reviewkit-header__score">{"\n\t\t\t\t\t"}<strong>4.8</strong> out of 5 based on				</span><span className="gutensuite-reviewkit-header__count">95 reviews</span></div>
                        <div className="gutensuite-reviewkit-header__badge items-center"><img className="gutensuite-reviewkit-header__badge-icon" decoding="async" src="/site-assets/be1fda57aee8a84e-ae7e5871d60f3ec7633a42859f3fac3a.png" alt="Trustpilot" /><span className="gutensuite-reviewkit-header__badge-name">Trustpilot</span></div>
                      </div>
                    </header>
                    <div className="style-carousel" data-site-import-carousel-root="0">
                      <div className="swiper swiper-horizontal swiper-backface-hidden">
                        <div className="swiper-wrapper" data-import-track-0={slidePosition0 ? "active" : undefined} ref={node => { slideTrack0.current = node; }} style={{ ...({ cursor: "grab", transitionDuration: "0ms", transform: "translate3d(0px, 0px, 0px)", transitionDelay: "0ms" }), "--import-slide-offset": slidePosition0 ? -slidePosition0.offset + "px" : undefined } as CSSProperties} id="swiper-wrapper-e60d0b4a2317dd89" aria-live="off" data-site-import-responsive="348">
                          <div className="swiper-slide swiper-slide-active" style={{ width: "390px", marginRight: "20px" }} role="group" aria-label="1 / 6" data-site-import-responsive="388">
                            <article className="gutensuite-reviewkit-reviews__item">
                              <div className="gutensuite-reviewkit-reviews__item-header">
                                <div className="gutensuite-reviewkit-reviews__item-left">
                                  <div className="gutensuite-reviewkit-reviews__item-rating">
                                    <img className="gutensuite-reviewkit-reviews__item-rating-image" decoding="async" src="/site-assets/5b51cf01ee219027-660a288058f87e3d69a83997a41b126d.png" alt="Rating 5 stars" />
                                  </div>
                                  <div className="gutensuite-reviewkit-reviews__item-author">
      				By <span className="gutensuite-reviewkit-reviews__item-author-name">Pratik Adhikam</span></div>
                                </div>
                                <div className="gutensuite-reviewkit-reviews__item-right">
                                  <p className="gutensuite-reviewkit-reviews__item-time">about 1 day ago</p>
                                </div>
                              </div>
                              <h4 className="gutensuite-reviewkit-reviews__item-title">SHIELD </h4>
                              <p className="gutensuite-reviewkit-reviews__item-content">It's not about my results , but the trust and integrity with shield and the purpose behind it. 

      You know it's the right path when you fail and then pivot your plan, because there is no one answer<img className="emoji" draggable="false" role="img" alt="🙏" src="/site-assets/ce992a422e2e5dd5-84aaad175685be41ce270fc98be26511.png" />,

      Anyone looking to empower the body should do shield.</p>
                            </article>
                          </div>
                          <div className="swiper-slide swiper-slide-next" style={{ width: "390px", marginRight: "20px" }} role="group" aria-label="2 / 6" data-site-import-responsive="401">
                            <article className="gutensuite-reviewkit-reviews__item">
                              <div className="gutensuite-reviewkit-reviews__item-header">
                                <div className="gutensuite-reviewkit-reviews__item-left">
                                  <div className="gutensuite-reviewkit-reviews__item-rating">
                                    <img className="gutensuite-reviewkit-reviews__item-rating-image" decoding="async" src="/site-assets/5b51cf01ee219027-660a288058f87e3d69a83997a41b126d.png" alt="Rating 5 stars" />
                                  </div>
                                  <div className="gutensuite-reviewkit-reviews__item-author">
      				By <span className="gutensuite-reviewkit-reviews__item-author-name">Kara Nafziger</span></div>
                                </div>
                                <div className="gutensuite-reviewkit-reviews__item-right">
                                  <p className="gutensuite-reviewkit-reviews__item-time">about 2 days ago</p>
                                </div>
                              </div>
                              <h4 className="gutensuite-reviewkit-reviews__item-title">They know how to treat and specialize…</h4>
                              <p className="gutensuite-reviewkit-reviews__item-content">They know how to treat and specialize in gut disorders. They have integrity, safety, trust, and accountability built into the program and they will get your plan Personalized specifically to you and your needs and they listen to you. Coach linsy is so wonderful to work with. Very knowledgeable and kind. Very supportive and smart. Has a wonderful personality and caring spirit. Her life experiences and hardships and lessons have equipped her for this.</p>
                            </article>
                          </div>
                          <div className="swiper-slide" style={{ width: "390px", marginRight: "20px" }} role="group" aria-label="3 / 6" data-site-import-responsive="413">
                            <article className="gutensuite-reviewkit-reviews__item">
                              <div className="gutensuite-reviewkit-reviews__item-header">
                                <div className="gutensuite-reviewkit-reviews__item-left">
                                  <div className="gutensuite-reviewkit-reviews__item-rating">
                                    <img className="gutensuite-reviewkit-reviews__item-rating-image" decoding="async" src="/site-assets/5b51cf01ee219027-660a288058f87e3d69a83997a41b126d.png" alt="Rating 5 stars" />
                                  </div>
                                  <div className="gutensuite-reviewkit-reviews__item-author">
      				By <span className="gutensuite-reviewkit-reviews__item-author-name">Herbert</span></div>
                                </div>
                                <div className="gutensuite-reviewkit-reviews__item-right">
                                  <p className="gutensuite-reviewkit-reviews__item-time">about 3 months ago</p>
                                </div>
                              </div>
                              <h4 className="gutensuite-reviewkit-reviews__item-title">This is a natural health system that works!</h4>
                              <p className="gutensuite-reviewkit-reviews__item-content">With Dominique Loyer as my coach I had a great experience with my journey to better gut health! The way the program simplifies and gives a step by step approach to bettering ones health was much needed for me. It was also helpful having  a coach from my same country of canada to relate with me on my journey. I look to implement these lifestyle changes going forward. I Would recommend the program and a coach like Dominique to anyone in need of help!</p>
                            </article>
                          </div>
                          <div className="swiper-slide" style={{ width: "390px", marginRight: "20px" }} role="group" aria-label="4 / 6" data-site-import-responsive="349">
                            <article className="gutensuite-reviewkit-reviews__item">
                              <div className="gutensuite-reviewkit-reviews__item-header">
                                <div className="gutensuite-reviewkit-reviews__item-left">
                                  <div className="gutensuite-reviewkit-reviews__item-rating">
                                    <img className="gutensuite-reviewkit-reviews__item-rating-image" decoding="async" src="/site-assets/5b51cf01ee219027-660a288058f87e3d69a83997a41b126d.png" alt="Rating 5 stars" />
                                  </div>
                                  <div className="gutensuite-reviewkit-reviews__item-author">
      				By <span className="gutensuite-reviewkit-reviews__item-author-name">Izabela Ostatek</span></div>
                                </div>
                                <div className="gutensuite-reviewkit-reviews__item-right">
                                  <p className="gutensuite-reviewkit-reviews__item-time">about 2 days ago</p>
                                </div>
                              </div>
                              <h4 className="gutensuite-reviewkit-reviews__item-title">I absolutely love the IBD coaching</h4>
                              <p className="gutensuite-reviewkit-reviews__item-content">I absolutely love the IBD coaching! <img className="emoji" draggable="false" role="img" alt="💚" src="/site-assets/eddf7d2e469cb165-b71a7e7cd95601bbea52f99923ef7dc8.png" /> It’s so refreshing to find a resource created with genuine care, knowledge and a real desire to help people navigate life with IBD.

      A special thank you to Dane Johnson for sharing his experience, knowledge and passion, and for creating a community that makes people feel supported, understood and less alone.

      The information is practical, empowering and inspiring. It’s not just about managing symptoms; it’s about taking an active role in your wellbeing and improving your quality of life.

      Thank you, Dane, for the dedication and positive energy you bring to the IBD community. A wonderful resource! <img className="emoji" draggable="false" role="img" alt="🌿" src="/site-assets/fcdcb7775e4d9d00-6a11b22351953142b74ab46ccb43d14c.png" /><img className="emoji" draggable="false" role="img" alt="✨" src="/site-assets/b3517b60885c8ad9-d22a55d682481afb4eee31ad8673fb8d.png" /></p>
                            </article>
                          </div>
                          <div className="swiper-slide" style={{ width: "390px", marginRight: "20px" }} role="group" aria-label="5 / 6" data-site-import-responsive="364">
                            <article className="gutensuite-reviewkit-reviews__item">
                              <div className="gutensuite-reviewkit-reviews__item-header">
                                <div className="gutensuite-reviewkit-reviews__item-left">
                                  <div className="gutensuite-reviewkit-reviews__item-rating">
                                    <img className="gutensuite-reviewkit-reviews__item-rating-image" decoding="async" src="/site-assets/5b51cf01ee219027-660a288058f87e3d69a83997a41b126d.png" alt="Rating 5 stars" />
                                  </div>
                                  <div className="gutensuite-reviewkit-reviews__item-author">
      				By <span className="gutensuite-reviewkit-reviews__item-author-name">Heather Cadwell</span></div>
                                </div>
                                <div className="gutensuite-reviewkit-reviews__item-right">
                                  <p className="gutensuite-reviewkit-reviews__item-time">about 3 days ago</p>
                                </div>
                              </div>
                              <h4 className="gutensuite-reviewkit-reviews__item-title">Fantastic resource </h4>
                              <p className="gutensuite-reviewkit-reviews__item-content">My son has been with CCL since October of 2024, such a great resource! Coach Taylor is awesome. He has been utilizing this protocol ever since and doing really well!  This is such a fantastic community of members! Thankful to have found CCL!</p>
                            </article>
                          </div>
                          <div className="swiper-slide" style={{ width: "390px", marginRight: "20px" }} role="group" aria-label="6 / 6" data-site-import-responsive="376">
                            <article className="gutensuite-reviewkit-reviews__item">
                              <div className="gutensuite-reviewkit-reviews__item-header">
                                <div className="gutensuite-reviewkit-reviews__item-left">
                                  <div className="gutensuite-reviewkit-reviews__item-rating">
                                    <img className="gutensuite-reviewkit-reviews__item-rating-image" decoding="async" src="/site-assets/5b51cf01ee219027-660a288058f87e3d69a83997a41b126d.png" alt="Rating 5 stars" />
                                  </div>
                                  <div className="gutensuite-reviewkit-reviews__item-author">
      				By <span className="gutensuite-reviewkit-reviews__item-author-name">Emily Hopkins</span></div>
                                </div>
                                <div className="gutensuite-reviewkit-reviews__item-right">
                                  <p className="gutensuite-reviewkit-reviews__item-time">about 12 months ago</p>
                                </div>
                              </div>
                              <h4 className="gutensuite-reviewkit-reviews__item-title">Get real results and heal, dont mask your symptoms</h4>
                              <p className="gutensuite-reviewkit-reviews__item-content">Diagnosed with UC in 2022. Joined at the end of 2023 I think? after hesitating for a few months but the medications weren't working at that point and my liver numbers were elevated (GI just referred me away).  Within 3 weeks of joining I had most of my symptoms resolved. It requires dedication, work, and mindset shifts. But all of it works together so well that I have improved my overall health so much that I feel better now at 40 than I did in most of my 30s. Mainstream medicine does not have the answers for autoimmunity, these guys do, specifically for crohns and UC.  I have done the initial coaching and extended coaching with Taryn and she helped me improve so many layers of my health. Still tune in to the lives, and get good info.  I recommend this program. </p>
                            </article>
                          </div>
                        </div>
                        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                          <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 1" aria-current="true" />
                          <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2" />
                          <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 3" />
                          <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 4" />
                          <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 5" />
                          <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 6" />
                        </div>
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                      </div>
                      <div className="swiper-button-container"><span aria-disabled={slidePosition0 !== null && slidePosition0.offset >= slidePosition0.maximum - 1} className={["swiper-button-next", (slidePosition0 !== null && slidePosition0.offset >= slidePosition0.maximum - 1) && "swiper-button-disabled"].filter(Boolean).join(" ")} onClick={event => { event.preventDefault(); event.stopPropagation(); moveslideTrack0(1); }} onKeyDown={event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); event.currentTarget.click(); } }} tabIndex={0} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-e60d0b4a2317dd89">{"\n\t\t\t\t"}<span className="dashicons dashicons-arrow-right-alt2" />{"\n\t\t\t"}<svg className="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor" /></svg></span><span aria-disabled={slidePosition0 !== null && slidePosition0.offset <= 1} className={["swiper-button-prev", (slidePosition0 !== null && slidePosition0.offset <= 1) && "swiper-button-disabled"].filter(Boolean).join(" ")} onClick={event => { event.preventDefault(); event.stopPropagation(); moveslideTrack0(-1); }} onKeyDown={event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); event.currentTarget.click(); } }} tabIndex={0} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-e60d0b4a2317dd89">{"\n\t\t\t\t"}<span className="dashicons" />{"\n\t\t\t"}<svg className="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor" /></svg></span></div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-2c0ef6d e-flex e-con-boxed e-con e-parent e-lazyloaded">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-3040ba5 e-con-full e-flex e-con">
              <div className="elementor-element elementor-element-2610a57 elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <img className={"attachment-full \x73ize-full"} loading="lazy" decoding="async" width="745" height="740" src="/site-assets/6695e7af59f11c19.jpg" alt="" srcSet="/site-assets/6695e7af59f11c19.jpg 745w, /site-assets/7050345c92c96f7b.jpg 300w, /site-assets/bd7bf00073305a28.jpg 150w" sizes="(max-width: 745px) 100vw, 745px" />
                </div>
              </div>
              <div className="elementor-element elementor-element-65e4597 elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  <p><span style={{ color: "rgb(0, 0, 0)" }}><strong>Dane Johnson, CHN</strong></span> – Founder &amp; Board-Certified Nutritionist</p>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-2182491 e-flex e-con-boxed e-con">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-869611b e-con-full e-flex e-con">
                  <div className="elementor-element elementor-element-26ea0d6 elementor-view-default elementor-widget elementor-widget-icon">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-wrapper">
                        <div className="elementor-icon">
                          <i className="fas fa-circle" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-64b21e2 elementor-widget elementor-widget-heading">
                    <div className="elementor-widget-container">
                      <p className="elementor-heading-title elementor-size-default">When Nothing Else Worked
      </p>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-8f2271c elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">How I saved my own life.
      </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-a6caec6 elementor-blockquote--align-center elementor-blockquote--align-left elementor-blockquote--skin-border elementor-widget elementor-widget-blockquote">
                  <div className="elementor-widget-container">
                    <blockquote className="elementor-blockquote align-baseline [outline:0px] [quotes:none]">
                      <p className="elementor-blockquote__content">
      				"I once faced the unimaginable — 122 lbs unable to walk, relying on a feeding tube, enduring endless medications and chemotherapy in a desperate battle against Crohn's and Colitis."
      			</p>
                    </blockquote>
                  </div>
                </div>
                <div className="elementor-element elementor-element-7832371 elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p>Welcome, fellow Crohns/Colitis Crusaders! My Name is Dane Johnson, and I’m honored to help you find real, impactful solutions for Crohn’s Disease and Ulcerative Colitis. For the last 10 years, I have been refining the core strategies of using functional health and alternative therapies to help us THRIVE symptom-free.</p>
                    <p>This all started when I got my first symptoms of IBD at 19 years old, with blood in the stool and multiple uncontrollable bowel movements a day. I nearly died at 27 years old while taking all medications possible. I made a deep commitment within myself a long time ago to not be a victim of this disease but to create an even better life than I ever had before. Our mission is to create the most impactful program and community for Crohn’s/Colitis in the world despite diet preference, personal adversities, age, location, or past adversities.</p>
                  </div>
                </div>
                <div className="elementor-element elementor-element-5ec4107 e-con-full e-flex e-con">
                  <div className="elementor-element elementor-element-d6ad074 e-con-full e-flex e-con">
                    <div className="elementor-element elementor-element-0e80060 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <p className="elementor-heading-title elementor-size-default">01</p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-797d1f8 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <p className="elementor-heading-title elementor-size-default">Personalization</p>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-d8a9ce9 e-con-full e-flex e-con">
                    <div className="elementor-element elementor-element-97298f6 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <p className="elementor-heading-title elementor-size-default">02</p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-b4da3ac elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <p className="elementor-heading-title elementor-size-default">Specialization</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-33037ba e-con-full e-flex e-con">
                  <div className="elementor-element elementor-element-28f1087 e-con-full e-flex e-con">
                    <div className="elementor-element elementor-element-8a97d3c elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <p className="elementor-heading-title elementor-size-default">03</p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-a26fb2f elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <p className="elementor-heading-title elementor-size-default">Daily Rebalancing</p>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-dfc40b7 e-con-full e-flex e-con">
                    <div className="elementor-element elementor-element-c3e60b8 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <p className="elementor-heading-title elementor-size-default">04</p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-ab04f2a elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <p className="elementor-heading-title elementor-size-default">Continuous innovation<br /><small>(For Remission)</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-b441993 e-flex e-con-boxed e-con e-parent e-lazyloaded">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-c60af87 e-con-full e-flex e-con">
              <div className="elementor-element elementor-element-47784dd e-con-full e-flex e-con">
                <div className="elementor-element elementor-element-95ab10d elementor-view-default elementor-widget elementor-widget-icon">
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-wrapper">
                      <div className="elementor-icon">
                        <i className="fas fa-circle" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-c1b5301 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default">YOUR PERSONALIZED PROGRAM</p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-d0c5496 elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">The Secret Behind S.H.I.E.L.D
      </h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-605936b elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  <p>A multi-dimensional program that allows you to cultivate a healing response to Crohn’s/Colitis Symptoms by personalizing these 6 pillars of health towards your unique needs. The S.H.I.E.L.D. Program compounds all healing efforts into simplified daily efforts.</p>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-fbe1e22 e-con-full e-flex e-con">
              <div className="elementor-element elementor-element-e9894c9 e-con-full e-flex e-con">
                <div className="elementor-element elementor-element-adc6af6 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">01</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-cc7cb1c elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p>1-on-1 guidance</p>
                  </div>
                </div>
                <div className="elementor-element elementor-element-ace55a6 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Private Coaching
      </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-cf2cf8c elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p>As part of your program, 1-on-1 private coaching is included for three months with direct message support with your coach and community support specialist. Your coach has personally experienced IBD and has supported 100’s of others with IBD. Your coach has the experience and niche to help you get results! It’s commonly said that “private coaching is priceless” and truly helps make your customized program a success. We also offer extended private coaching as desired.</p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-b77a1f5 e-con-full e-flex e-con">
                <div className="elementor-element elementor-element-6737275 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">02</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-df57fd9 elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p>Root Cause support</p>
                  </div>
                </div>
                <div className="elementor-element elementor-element-c911598 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Professional Grade Supplements, Lab Work &amp; Therapies
      </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-9750306 elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p>Your membership includes a $400 gift card for supplements you may need. All supplements are 3rd party tested, clinically proven with family-owned companies. You will gain access to order the most premiere functional lab work to your doorstep across the world. You will also have access to education of the most profound alternative therapies such as Ozone therapy, Peptide therapy, Colon therapies and much more. You have international access to the most powerful solutions for IBD!</p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-5cfafe6 e-con-full e-flex e-con">
                <div className="elementor-element elementor-element-6ba2c18 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">03</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-fbd9621 elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p>No one-size-fits-all</p>
                  </div>
                </div>
                <div className="elementor-element elementor-element-ce62202 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Customized IBD Solutions
      </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-2483a5e elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p>There is no “one size fits all” solution for IBD. We partner with you to build your very own unique solution no matter if you’re dealing with constipation, diarrhea, weight loss, surgery, fistula, pain, bloating, or other issues. We help you save countless hours and efforts by building this with you and refining it as we gain experience and RESULTS! This is one of the most important parts of our success and will be one of the reasons why joining the S.H.I.E.L.D. Program will be one of the best choices you’ve ever made. Build your unique solutions and get self-empowered.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-0665bea e-con-full e-flex e-con">
              <div className="elementor-element elementor-element-c9dd9d4 e-con-full e-flex e-con">
                <div className="elementor-element elementor-element-fc019cd elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">04</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-d071da4 elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p>2500+ IBD WARRIORS</p>
                  </div>
                </div>
                <div className="elementor-element elementor-element-03fa9ae elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">LIVE Training &amp; Community Access
      </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-1ea6cf8 elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p>As part of your program, 1-on-1 private coaching is included (60min session) for 3 months with direct message support from your IBD coach and support specialist! Your coach has personally reversed IBD symptoms themselves and has helped 100’s of others become self-empowered. Our coaches focus on IBD and know what it takes to get massive results! It’s commonly said the private coaching is priceless and helps make your customized program a success. Extended private coaching is available as discussed with your coach after the initial 3 months of coaching included.</p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-a0f94bd e-con-full e-flex e-con">
                <div className="elementor-element elementor-element-3c1ca7b elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">05</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-2677d46 elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p>HR &amp; CUSTOMER EXPERIENCE</p>
                  </div>
                </div>
                <div className="elementor-element elementor-element-8fbbe36 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Support Specialist
      </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-96475fb elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p>Your personal IBD support specialist is included in the program to help guide you through your membership values and maximize your experience for optimal results! Your support specialist has also experienced Crohn’s and Colitis personally and will assist your private coach in helping you through your journey to success!</p>
                    <p> </p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-ae8593d e-con-full e-flex e-con">
                <div className="elementor-element elementor-element-b2b2cd6 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">06</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-f9c2943 elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p>
                      <span className="pillar-sub">One-time investment</span>
                    </p>
                  </div>
                </div>
                <div className="elementor-element elementor-element-8683272 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Lifetime Membership
      </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-6a62feb elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p>Includes a lifetime membership for the one time investment. Your membership includes 3 months private coaching, access S.H.I.E.L.D. Program, wholesale price on labs, exclusive discounts on professional grade supplements, access to IBD University, and weekly LIVE trainings by Dane and our IBD Professors</p>
                  </div>
                </div>
                <div className="elementor-element elementor-element-fabce0f elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p>
                      <em>We reserve the right to eliminate a membership at our discretion for violation of company policies</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-497c25f e-con-full e-flex e-con">
              <div className="elementor-element elementor-element-f2368b6 elementor-align-center elementor-mobile-align-center elementor-widget elementor-widget-button [width:100%]">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a className="elementor-button elementor-size-sm" href="https://www.cclworkshop.com/apply?el=website" target="_blank">
                      <span className="elementor-button-content-wrapper">{"\n\t\t\t\t\t\t"}<span className="elementor-button-icon">{"\n\t\t\t\t"}<i className="fas fa-long-arrow-alt-right" aria-hidden="true" />{"\t\t\t"}</span>{"\n\t\t\t\t\t\t\t\t\t"}<span className="elementor-button-text">Book Your Free IBD Session</span>{"\n\t\t\t\t\t"}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ImportedFooterExplore />
      <div id="fb-pxl-ajax-code" />
      <span className="elementor-screen-only" id="elementor-device-mode" />
      <svg className="e-font-icon-svg-symbols" style={{ display: "none" }} />

    </>
  );
}

function ImportedHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuLeft, setMenuLeft] = useState(0);
  const [stuck, setStuck] = useState(false);
  const topBar = useRef<HTMLDivElement | null>(null);
  const menuToggle = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Elementor sticky: the nav bar pins once the announcement bar has scrolled away (always pinned on phones, where that bar is hidden).
    const update = () => setStuck(window.scrollY >= (topBar.current?.offsetHeight ?? 0));
    const resize = () => { update(); if (window.innerWidth > 1024) setMenuOpen(false); };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", resize);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", resize); };
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") { setMenuOpen(false); menuToggle.current?.focus(); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);
  const toggleMenu = () => {
    const container = menuToggle.current?.parentElement;
    if (container) setMenuLeft(-container.getBoundingClientRect().left);
    setMenuOpen((open) => !open);
  };
  const stickyClass = stuck ? " elementor-sticky--active elementor-section--handles-inside" : "";
  return (
    <header className="elementor elementor-7 elementor-location-header" data-elementor-id="7">
      <div ref={topBar} className="elementor-element elementor-element-0ad0e82 elementor-hidden-mobile e-flex e-con-boxed e-con e-parent e-lazyloaded">
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-c2b7872 elementor-view-default elementor-widget elementor-widget-icon">
            <div className="elementor-widget-container">
              <div className="elementor-icon-wrapper">
                <div className="elementor-icon">
                  <i className="fas fa-circle" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-c7f7560 elementor-widget elementor-widget-text-editor">
            <div className="elementor-widget-container">
              <p>Book a complimentary IBD strategy session today</p>
            </div>
          </div>
          <div className="elementor-element elementor-element-17e2b1f elementor-widget elementor-widget-button">
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <a className="elementor-button elementor-size-sm" href="https://www.cclworkshop.com/apply?el=website" target="_blank">
                  <span className="elementor-button-content-wrapper">{"\n\t\t\t\t\t\t"}<span className="elementor-button-icon">{"\n\t\t\t\t"}<i className="fas fa-long-arrow-alt-right" aria-hidden="true" />{"\t\t\t"}</span>{"\n\t\t\t\t\t\t\t\t\t"}<span className="elementor-button-text">Schedule your free call</span>{"\n\t\t\t\t\t"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"elementor-element elementor-element-78703a5 e-flex e-con-boxed e-con e-parent elementor-sticky e-lazyloaded elementor-sticky--effects" + stickyClass} style={stuck ? { position: "fixed", width: "100%", marginTop: 0, marginBottom: 0, top: 0 } : undefined} data-site-import-responsive="21">
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-951d4e7 elementor-widget elementor-widget-image">
            <div className="elementor-widget-container">
              <a href="/">
                <img className={"attachment-full \x73ize-full wp-image-54"} width="457" height="107" src="/site-assets/5497fe353f8f8cb2.png" alt="" srcSet="/site-assets/5497fe353f8f8cb2.png 457w, /site-assets/3e05585739b27ff2.png 300w" sizes="(max-width: 457px) 100vw, 457px" />
              </a>
            </div>
          </div>
          <div className="elementor-element elementor-element-a61003d elementor-nav-menu__align-end elementor-nav-menu--stretch elementor-nav-menu__text-align-center elementor-nav-menu--dropdown-tablet elementor-nav-menu--toggle elementor-widget elementor-widget-nav-menu">
            <div className="elementor-widget-container">
              <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline" aria-label="Menu">
                <ul className="elementor-nav-menu" id="menu-1-a61003d">
                  <li className="menu-item">
                    <a className="elementor-item" href="https://shieldprogram.crohnscolitislifestyle.com/shieldprogram" target="_blank">S.H.I.E.L.D. Program</a>
                  </li>
                  <li className="menu-item">
                    <a className="elementor-item" href="/about-us">Team</a>
                  </li>
                  <li className="menu-item">
                    <a className="elementor-item" href="/testimonials">Testimonies</a>
                  </li>
                  <li className="menu-item">
                    <a className="elementor-item" href="/podcast">Podcast</a>
                  </li>
                </ul>
              </nav>
              <div ref={menuToggle} className={"elementor-menu-toggle" + (menuOpen ? " elementor-active" : "")} role="button" tabIndex={0} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="menu-2-a61003d" onClick={toggleMenu} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); toggleMenu(); } }}>
                <i className="elementor-menu-toggle__icon--open eicon-menu-bar" aria-hidden="true" role="presentation" />
                <i className="elementor-menu-toggle__icon--close eicon-close" aria-hidden="true" role="presentation" />
              </div>
              <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" style={{ width: "100vw", left: `${menuLeft}px`, top: "33px", "--menu-height": menuOpen ? "100vh" : "0" } as CSSProperties} aria-hidden={!menuOpen} data-site-import-responsive="726">
                <ul className="elementor-nav-menu" id="menu-2-a61003d">
                  <li className="menu-item">
                    <a className="elementor-item" href="https://shieldprogram.crohnscolitislifestyle.com/shieldprogram" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)} target="_blank">S.H.I.E.L.D. Program</a>
                  </li>
                  <li className="menu-item">
                    <a className="elementor-item" href="/about-us" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Team</a>
                  </li>
                  <li className="menu-item">
                    <a className="elementor-item" href="/testimonials" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Testimonies</a>
                  </li>
                  <li className="menu-item">
                    <a className="elementor-item" href="/podcast" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Podcast</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="elementor-element elementor-element-4aef88d e-con-full elementor-hidden-mobile e-flex e-con">
            <div className="elementor-element elementor-element-897aa3b elementor-align-justify elementor-widget__width-initial elementor-mobile-align-center elementor-hidden-mobile elementor-widget elementor-widget-button">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a className="elementor-button elementor-size-sm" href="https://theibdshop.com/" target="_blank">
                    <span className="elementor-button-content-wrapper">{"\n\t\t\t\t\t\t"}<span className="elementor-button-icon">{"\n\t\t\t\t"}<i className="fas fa-long-arrow-alt-right" aria-hidden="true" />{"\t\t\t"}</span>{"\n\t\t\t\t\t\t\t\t\t"}<span className="elementor-button-text">Shop</span>{"\n\t\t\t\t\t"}</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-a33024f elementor-align-justify elementor-widget__width-initial elementor-mobile-align-center elementor-hidden-mobile elementor-widget elementor-widget-button">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a className="elementor-button elementor-size-sm" href="https://www.cclworkshop.com/apply?el=website" target="_blank">
                    <span className="elementor-button-content-wrapper">{"\n\t\t\t\t\t\t"}<span className="elementor-button-icon">{"\n\t\t\t\t"}<i className="fas fa-long-arrow-alt-right" aria-hidden="true" />{"\t\t\t"}</span>{"\n\t\t\t\t\t\t\t\t\t"}<span className="elementor-button-text">Book My IBD Strategy Session</span>{"\n\t\t\t\t\t"}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-78703a5 e-flex e-con-boxed e-con e-parent elementor-sticky e-lazyloaded elementor-sticky--effects elementor-sticky__spacer" style={{ visibility: "hidden", transition: "none", animation: "auto ease 0s 1 normal none running none", display: stuck ? undefined : "none" } as CSSProperties} aria-hidden="true">
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-951d4e7 elementor-widget elementor-widget-image">
            <div className="elementor-widget-container">
              <a href="/">
                <img className={"attachment-full \x73ize-full wp-image-54"} width="457" height="107" src="/site-assets/5497fe353f8f8cb2.png" alt="" srcSet="/site-assets/5497fe353f8f8cb2.png 457w, /site-assets/3e05585739b27ff2.png 300w" sizes="(max-width: 457px) 100vw, 457px" />
              </a>
            </div>
          </div>
          <div className="elementor-element elementor-element-a61003d elementor-nav-menu__align-end elementor-nav-menu--stretch elementor-nav-menu__text-align-center elementor-nav-menu--dropdown-tablet elementor-nav-menu--toggle elementor-widget elementor-widget-nav-menu">
            <div className="elementor-widget-container">
              <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline" aria-label="Menu">
                <ul className="elementor-nav-menu" id="menu-1-a61003d">
                  <li className="menu-item">
                    <a className="elementor-item" href="https://shieldprogram.crohnscolitislifestyle.com/shieldprogram" target="_blank">S.H.I.E.L.D. Program</a>
                  </li>
                  <li className="menu-item">
                    <a className="elementor-item" href="/about-us">Team</a>
                  </li>
                  <li className="menu-item">
                    <a className="elementor-item" href="/testimonials">Testimonies</a>
                  </li>
                  <li className="menu-item">
                    <a className="elementor-item" href="/podcast">Podcast</a>
                  </li>
                </ul>
              </nav>
              <div className="elementor-menu-toggle" role="button" tabIndex={0} aria-label="Menu Toggle" aria-expanded="false">
                <i className="elementor-menu-toggle__icon--open eicon-menu-bar" aria-hidden="true" role="presentation" />
                <i className="elementor-menu-toggle__icon--close eicon-close" aria-hidden="true" role="presentation" />
              </div>
              <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" style={{ top: "48.3906px", "--menu-height": "0", width: "1273px", left: "0px" } as CSSProperties} aria-hidden="true">
                <ul className="elementor-nav-menu" id="menu-2-a61003d">
                  <li className="menu-item">
                    <a className="elementor-item" href="https://shieldprogram.crohnscolitislifestyle.com/shieldprogram" tabIndex={-1} target="_blank">S.H.I.E.L.D. Program</a>
                  </li>
                  <li className="menu-item">
                    <a className="elementor-item" href="/about-us" tabIndex={-1}>Team</a>
                  </li>
                  <li className="menu-item">
                    <a className="elementor-item" href="/testimonials" tabIndex={-1}>Testimonies</a>
                  </li>
                  <li className="menu-item">
                    <a className="elementor-item" href="/podcast" tabIndex={-1}>Podcast</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="elementor-element elementor-element-4aef88d e-con-full elementor-hidden-mobile e-flex e-con">
            <div className="elementor-element elementor-element-897aa3b elementor-align-justify elementor-widget__width-initial elementor-mobile-align-center elementor-hidden-mobile elementor-widget elementor-widget-button">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a className="elementor-button elementor-size-sm" href="https://theibdshop.com/" target="_blank">
                    <span className="elementor-button-content-wrapper">{"\n\t\t\t\t\t\t"}<span className="elementor-button-icon">{"\n\t\t\t\t"}<i className="fas fa-long-arrow-alt-right" aria-hidden="true" />{"\t\t\t"}</span>{"\n\t\t\t\t\t\t\t\t\t"}<span className="elementor-button-text">Shop</span>{"\n\t\t\t\t\t"}</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-a33024f elementor-align-justify elementor-widget__width-initial elementor-mobile-align-center elementor-hidden-mobile elementor-widget elementor-widget-button">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a className="elementor-button elementor-size-sm" href="https://www.cclworkshop.com/apply?el=website" target="_blank">
                    <span className="elementor-button-content-wrapper">{"\n\t\t\t\t\t\t"}<span className="elementor-button-icon">{"\n\t\t\t\t"}<i className="fas fa-long-arrow-alt-right" aria-hidden="true" />{"\t\t\t"}</span>{"\n\t\t\t\t\t\t\t\t\t"}<span className="elementor-button-text">Book My IBD Strategy Session</span>{"\n\t\t\t\t\t"}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ImportedFooterExplore() {
  return (
    <footer className="elementor elementor-331 elementor-location-footer" data-elementor-id="331">
      <div className="elementor-element elementor-element-37ebe96 e-flex e-con-boxed e-con e-parent e-lazyloaded">
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-5a5b052 e-con-full e-flex e-con">
            <div className="elementor-element elementor-element-b371a0a e-con-full e-flex e-con">
              <div className="elementor-element elementor-element-c64d61c elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <img className={"attachment-large \x73ize-large wp-image-54 [filter:brightness(200%)_contrast(200%)_saturate(0%)_blur(0px)_hue-rotate(0deg)]"} width="457" height="107" src="/site-assets/5497fe353f8f8cb2.png" alt="" srcSet="/site-assets/5497fe353f8f8cb2.png 457w, /site-assets/3e05585739b27ff2.png 300w" sizes="(max-width: 457px) 100vw, 457px" />
                </div>
              </div>
              <div className="elementor-element elementor-element-e3b5c4c elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <p className="elementor-heading-title elementor-size-default">Personalized natural healing for Crohn's Disease, Ulcerative Colitis, and other forms of IBD symptoms — from a team who's lived it.

    </p>
                </div>
              </div>
              <div className="elementor-element elementor-element-f062c70 e-grid-align-left elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons">
                <div className="elementor-widget-container">
                  <div className="elementor-grid [column-gap:var(--grid-column-gap,5px)] [grid-template-columns:var(--grid-template-columns)] [justify-content:var(--justify-content,center)] [justify-items:var(--justify-content,center)] [row-gap:var(--grid-row-gap,5px)] [width:100%] [word-spacing:var(--grid-column-gap)]" role="list"><span className="elementor-grid-item [min-width:0px] [word-break:break-word]" role="listitem">{"\n\t\t\t\t\t"}<a className="elementor-icon elementor-social-icon elementor-social-icon-instagram items-center [width:calc(var(--icon-size,25px)_+_2_*_var(--icon-padding,.5em))]" href="https://www.instagram.com/crohnscolitis_lifestyle/" target="_blank">{"\n\t\t\t\t\t\t"}<span className="elementor-screen-only">Instagram</span>{"\n\t\t\t\t\t\t"}<i className="fab fa-instagram" aria-hidden="true" />{"\t\t\t\t\t"}</a>{"\n\t\t\t\t"}</span><span className="elementor-grid-item [min-width:0px] [word-break:break-word]" role="listitem">{"\n\t\t\t\t\t"}<a className="elementor-icon elementor-social-icon elementor-social-icon-facebook items-center [width:calc(var(--icon-size,25px)_+_2_*_var(--icon-padding,.5em))]" href="https://www.facebook.com/CrohnsColitisLifestyle" target="_blank">{"\n\t\t\t\t\t\t"}<span className="elementor-screen-only">Facebook</span>{"\n\t\t\t\t\t\t"}<i className="fab fa-facebook" aria-hidden="true" />{"\t\t\t\t\t"}</a>{"\n\t\t\t\t"}</span><span className="elementor-grid-item [min-width:0px] [word-break:break-word]" role="listitem">{"\n\t\t\t\t\t"}<a className="elementor-icon elementor-social-icon elementor-social-icon-youtube items-center [width:calc(var(--icon-size,25px)_+_2_*_var(--icon-padding,.5em))]" href="https://www.youtube.com/@crohnscolitislifestyle" target="_blank">{"\n\t\t\t\t\t\t"}<span className="elementor-screen-only">Youtube</span>{"\n\t\t\t\t\t\t"}<i className="fab fa-youtube" aria-hidden="true" />{"\t\t\t\t\t"}</a>{"\n\t\t\t\t"}</span><span className="elementor-grid-item [min-width:0px] [word-break:break-word]" role="listitem">{"\n\t\t\t\t\t"}<a className="elementor-icon elementor-social-icon elementor-social-icon-spotify items-center [width:calc(var(--icon-size,25px)_+_2_*_var(--icon-padding,.5em))]" href={"https://open.spotify.com/show/1tZs7YAhGD1LWLCd6krtT1?si=bde1ca0ae3f145dd&nd=1&dlsi=eb74d1d46c244c0a"} target="_blank">{"\n\t\t\t\t\t\t"}<span className="elementor-screen-only">Spotify</span>{"\n\t\t\t\t\t\t"}<i className="fab fa-spotify" aria-hidden="true" />{"\t\t\t\t\t"}</a>{"\n\t\t\t\t"}</span></div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-6d6b5e4 e-con-full e-flex e-con">
              <div className="elementor-element elementor-element-162039a elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">Explore
    </h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-8f341cd elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items">
                    <li className="elementor-icon-list-item">
                      <a href="/about-us">
                        <span className="elementor-icon-list-text">Team</span>
                      </a>
                    </li>
                    <li className="elementor-icon-list-item">
                      <a href="/testimonials">
                        <span className="elementor-icon-list-text">Testimonies</span>
                      </a>
                    </li>
                    <li className="elementor-icon-list-item">
                      <a href="/podcast">
                        <span className="elementor-icon-list-text">Podcast</span>
                      </a>
                    </li>
                    <li className="elementor-icon-list-item">
                      <a href="https://shieldprogram.crohnscolitislifestyle.com/shieldprogram" target="_blank">
                        <span className="elementor-icon-list-text">S.H.I.E.L.D. Program</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-a309425 e-con-full e-flex e-con">
              <div className="elementor-element elementor-element-a27116a elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">Get Started</h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-1481b6f elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items">
                    <li className="elementor-icon-list-item">
                      <a href="https://www.cclworkshop.com/apply?el=website" target="_blank">
                        <span className="elementor-icon-list-text">Free Strategy Session</span>
                      </a>
                    </li>
                    <li className="elementor-icon-list-item">
                      <a href="http://6tips.crohnscolitislifestyle.com/?el=website" target="_blank">
                        <span className="elementor-icon-list-text">Download Free Guide</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-aff195c e-con-full e-flex e-con">
              <div className="elementor-element elementor-element-c0e2987 elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">IBD Shop</h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-a780aca elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items">
                    <li className="elementor-icon-list-item">
                      <a href="https://theibdshop.com/" target="_blank">
                        <span className="elementor-icon-list-text">Shop All Products</span>
                      </a>
                    </li>
                    <li className="elementor-icon-list-item">
                      <a href="https://theibdshop.com/collections/all/best-sellers" target="_blank">
                        <span className="elementor-icon-list-text">Best Sellers</span>
                      </a>
                    </li>
                    <li className="elementor-icon-list-item">
                      <a href="https://theibdshop.com/collections/bundles" target="_blank">
                        <span className="elementor-icon-list-text">Bundle Packs</span>
                      </a>
                    </li>
                    <li className="elementor-icon-list-item">
                      <a href="https://theibdshop.com/collections/all/travel-must-haves" target="_blank">
                        <span className="elementor-icon-list-text">Travel Must-Haves</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-2d729c2 e-con-full e-flex e-con">
            <div className="elementor-element elementor-element-d9f855e elementor-widget elementor-widget-text-editor">
              <div className="elementor-widget-container">
                <p><strong>Medical Disclaimer</strong>. This content is for informational and educational purposes only. It is not intended to provide medical advice or to take the place of such advice or treatment from a personal physician. All readers/viewers are advised to consult their doctors or qualified health professionals regarding specific health questions. Neither CrohnsColitisLifestyle, Dane Johnson, nor the publisher takes responsibility for possible health consequences of any person reading or following the information in this educational content. All viewers, especially those taking prescription or over-the-counter medications, should consult their physicians before beginning any nutrition, supplement or lifestyle program.</p>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-4a300e2 e-con-full e-flex e-con">
            <div className="elementor-element elementor-element-6e1cd71 elementor-widget elementor-widget-text-editor">
              <div className="elementor-widget-container">
                <p>© 2026 Crohn’s &amp; Colitis Lifestyle. All rights reserved.</p>
              </div>
            </div>
            <div className="elementor-element elementor-element-fa50ff0 e-con-full e-flex e-con">
              <div className="elementor-element elementor-element-fc85430 elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  <p>
                    <span style={{ color: "rgb(255, 255, 255)" }}>
                      <a style={{ color: "rgb(255, 255, 255)" }} href="/privacy-policy" rel="noopener" target="_blank">Privacy Policy </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="elementor-element elementor-element-7a1f1bf elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  <p>
                    <span style={{ color: "rgb(255, 255, 255)" }}>
                      <a style={{ color: "rgb(255, 255, 255)" }} href="/terms-conditions" rel="noopener" target="_blank">Terms &amp; Conditions</a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


function useImportedLayout() {
  useEffect(() => {
    const scrollingAreas = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-root]"));
    const scrollTop = () =>
      scrollingAreas.find(
        (node) =>
          node.clientHeight > 0 &&
          node.scrollHeight > node.clientHeight &&
          /^(auto|scroll)$/.test(getComputedStyle(node).overflowY),
      )?.scrollTop ?? window.scrollY;
    const scrollHeaders = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-header]"))
      .slice(0, 128)
      .flatMap((node) => {
        try {
          const states = JSON.parse(node.dataset["siteImportScrollHeader"] || "{}");
          if (!states || typeof states !== "object") return [];
          for (const key of ["desktop", "mobile"]) {
            const state = states[key];
            if (
              !state ||
              !Array.isArray(state.added) ||
              !Array.isArray(state.removed) ||
              state.added.length + state.removed.length > 32
            )
              delete states[key];
          }
          return [
            {
              node,
              states,
              original: new Set(node.classList),
              originalFill: node.getAttribute("fill"),
              transform: node.style.getPropertyValue("transform"),
              priority: node.style.getPropertyPriority("transform"),
            },
          ];
        } catch {
          return [];
        }
      });
    function syncScrollHeaders(reset = false) {
      for (const { node, states, original, originalFill, transform, priority } of scrollHeaders) {
        if (!reset && node.getAttribute("data-import-menu-open") === "true") continue;
        const state = states[innerWidth < 768 ? "mobile" : "desktop"];
        if ([states.desktop, states.mobile].some((entry) => entry && Object.hasOwn(entry, "fill"))) {
          if (originalFill === null) node.removeAttribute("fill");
          else node.setAttribute("fill", originalFill);
        }
        if (states.desktop?.transform || states.mobile?.transform) {
          if (transform) node.style.setProperty("transform", transform, priority);
          else node.style.removeProperty("transform");
        }
        for (const value of [states.desktop, states.mobile].filter(Boolean) as {
          added: string[];
          removed: string[];
        }[]) {
          for (const token of [...(value.added || []), ...(value.removed || [])]) {
            if (typeof token !== "string" || !token || /\s/.test(token)) continue;
            node.classList.toggle(token, original.has(token));
          }
        }
        if (reset || !state || !Number.isFinite(state.threshold) || scrollTop() < state.threshold) continue;
        let until = state.until;
        if (
          typeof state.untilAnchor === "string" &&
          /^\d$/.test(state.untilAnchor) &&
          Number.isFinite(state.untilProgress) &&
          Math.abs(state.untilProgress) <= 2
        ) {
          const anchor = document.querySelector<HTMLElement>(
            '[data-site-import-header-end="' + state.untilAnchor + '"]',
          );
          if (anchor) until = anchor.getBoundingClientRect().top + scrollTop() + innerHeight * state.untilProgress;
        }
        if (Number.isFinite(until) && scrollTop() >= until) continue;
        if (state.fill === null) node.removeAttribute("fill");
        else if (typeof state.fill === "string" && state.fill.length <= 256 && !/url\(/i.test(state.fill))
          node.setAttribute("fill", state.fill);
        if (
          typeof state.transform === "string" &&
          state.transform.length <= 128 &&
          CSS.supports("transform", state.transform)
        )
          node.style.setProperty("transform", state.transform, "important");
        for (const token of state.added || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.add(token);
        for (const token of state.removed || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.remove(token);
      }
    }
    const handleScroll = () => {
      syncScrollHeaders();
    };
    function resizeSummaries() {
      syncScrollHeaders();
    }
    const loopingVideos = Array.from(
      document.querySelectorAll<HTMLVideoElement>("video[loop]:not([autoplay]):not([controls])"),
    )
      .filter((video) => video.muted && !video.closest("[data-site-import-carousel-store]"))
      .slice(0, 32);
    const videoObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      }
    });
    loopingVideos.forEach((video) => videoObserver.observe(video));
    document.addEventListener("load", handleScroll, true);
    resizeSummaries();
    const parallaxFrame = requestAnimationFrame(handleScroll);
    window.addEventListener("resize", resizeSummaries);
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    return () => {
      videoObserver.disconnect();
      loopingVideos.forEach((video) => video.pause());
      cancelAnimationFrame(parallaxFrame);
      syncScrollHeaders(true);
      document.removeEventListener("load", handleScroll, true);
      window.removeEventListener("resize", resizeSummaries);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);
}
