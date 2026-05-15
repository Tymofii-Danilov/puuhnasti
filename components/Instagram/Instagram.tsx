"use client";
import { useEffect } from "react";
import css from "./Instagram.module.css";
export default function Instagram() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;

    script.onload = () => {
      window.instgrm?.Embeds?.process();
    };

    document.body.appendChild(script);
  }, []);
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DQ9a-UkiNKL/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: "3px",
            boxShadow:
              "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px",
            maxWidth: "540px",
            minWidth: "326px",
            padding: 0,
            width: "99.375%",
          }}
        >
          <div style={{ padding: 16 }}>
            <a
              href="https://www.instagram.com/p/DQ9a-UkiNKL/?utm_source=ig_embed&utm_campaign=loading"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#FFFFFF",
                lineHeight: 0,
                padding: 0,
                textAlign: "center",
                textDecoration: "none",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "50%",
                    height: 40,
                    width: 40,
                    marginRight: 14,
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: 4,
                      height: 14,
                      width: 100,
                      marginBottom: 6,
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: 4,
                      height: 14,
                      width: 60,
                    }}
                  />
                </div>
              </div>

              <div style={{ padding: "19% 0" }} />

              <div
                style={{
                  display: "block",
                  height: 50,
                  width: 50,
                  margin: "0 auto 12px",
                }}
              >
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <g transform="translate(-511 -20)" fill="#000000">
                      <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886" />
                    </g>
                  </g>
                </svg>
              </div>

              <div style={{ paddingTop: 8 }}>
                <div
                  style={{
                    color: "#3897f0",
                    fontFamily: "Arial, sans-serif",
                    fontSize: 14,
                    fontWeight: 550,
                    lineHeight: "18px",
                  }}
                >
                  Переглянути цей допис в Instagram
                </div>
              </div>

              <div style={{ padding: "12.5% 0" }} />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 14,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "50%",
                    height: 12.5,
                    width: 12.5,
                  }}
                />

                <div style={{ marginLeft: 8 }}>
                  <div
                    style={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: "50%",
                      height: 20,
                      width: 20,
                    }}
                  />
                </div>

                <div style={{ marginLeft: "auto" }}>
                  <div
                    style={{
                      borderTop: "8px solid #F4F4F4",
                      borderRight: "8px solid transparent",
                      width: 0,
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: 4,
                    height: 14,
                    width: 224,
                    marginBottom: 6,
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: 4,
                    height: 14,
                    width: 144,
                  }}
                />
              </div>
            </a>

            <p
              style={{
                color: "#c9c8cd",
                fontFamily: "Arial, sans-serif",
                fontSize: 14,
                lineHeight: "17px",
                marginTop: 8,
                padding: "8px 0 7px",
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <a
                href="https://www.instagram.com/p/DQ9a-UkiNKL/?utm_source=ig_embed&utm_campaign=loading"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#c9c8cd",
                  textDecoration: "none",
                }}
              >
                Допис, поширений ПУХНАСТІ | Тафтинг | Tufting | килими ручної
                роботи (@puuhnasti)
              </a>
            </p>
          </div>
        </blockquote>
      </li>
      <li className={css.item}>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DYPlEemiDbv/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: "3px",
            boxShadow:
              "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px",
            maxWidth: "540px",
            minWidth: "326px",
            padding: 0,
            width: "99.375%",
          }}
        >
          <div style={{ padding: 16 }}>
            <a
              href="https://www.instagram.com/p/DYPlEemiDbv/?utm_source=ig_embed&utm_campaign=loading"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#FFFFFF",
                lineHeight: 0,
                padding: 0,
                textAlign: "center",
                textDecoration: "none",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "50%",
                    height: 40,
                    width: 40,
                    marginRight: 14,
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: 4,
                      height: 14,
                      width: 100,
                      marginBottom: 6,
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: 4,
                      height: 14,
                      width: 60,
                    }}
                  />
                </div>
              </div>

              <div style={{ padding: "19% 0" }} />

              <div
                style={{
                  display: "block",
                  height: 50,
                  width: 50,
                  margin: "0 auto 12px",
                }}
              >
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <g transform="translate(-511 -20)" fill="#000000">
                      <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886" />
                    </g>
                  </g>
                </svg>
              </div>

              <div style={{ paddingTop: 8 }}>
                <div
                  style={{
                    color: "#3897f0",
                    fontFamily: "Arial, sans-serif",
                    fontSize: 14,
                    fontWeight: 550,
                    lineHeight: "18px",
                  }}
                >
                  Переглянути цей допис в Instagram
                </div>
              </div>

              <div style={{ padding: "12.5% 0" }} />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 14,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "50%",
                    height: 12.5,
                    width: 12.5,
                  }}
                />

                <div style={{ marginLeft: 8 }}>
                  <div
                    style={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: "50%",
                      height: 20,
                      width: 20,
                    }}
                  />
                </div>

                <div style={{ marginLeft: "auto" }}>
                  <div
                    style={{
                      borderTop: "8px solid #F4F4F4",
                      borderRight: "8px solid transparent",
                      width: 0,
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: 4,
                    height: 14,
                    width: 224,
                    marginBottom: 6,
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: 4,
                    height: 14,
                    width: 144,
                  }}
                />
              </div>
            </a>

            <p
              style={{
                color: "#c9c8cd",
                fontFamily: "Arial, sans-serif",
                fontSize: 14,
                lineHeight: "17px",
                marginTop: 8,
                padding: "8px 0 7px",
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <a
                href="https://www.instagram.com/p/DYPlEemiDbv/?utm_source=ig_embed&utm_campaign=loading"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#c9c8cd",
                  textDecoration: "none",
                }}
              >
                Допис, поширений ПУХНАСТІ | Тафтинг | Tufting | килими ручної
                роботи (@puuhnasti)
              </a>
            </p>
          </div>
        </blockquote>
      </li>
      <li className={css.item}>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DRwq2ZiiCIo/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: 3,
            boxShadow:
              "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: 1,
            maxWidth: 540,
            minWidth: 326,
            padding: 0,
            width: "99.375%",
          }}
        >
          <div style={{ padding: 16 }}>
            <a
              href="https://www.instagram.com/p/DRwq2ZiiCIo/?utm_source=ig_embed&utm_campaign=loading"
              style={{
                background: "#FFFFFF",
                lineHeight: 0,
                padding: 0,
                textAlign: "center",
                textDecoration: "none",
                width: "100%",
              }}
              target="_blank"
              rel="noreferrer"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "50%",
                    height: 40,
                    marginRight: 14,
                    width: 40,
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: 4,
                      height: 14,
                      marginBottom: 6,
                      width: 100,
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: 4,
                      height: 14,
                      width: 60,
                    }}
                  />
                </div>
              </div>

              <div style={{ padding: "19% 0" }} />

              <div
                style={{
                  display: "block",
                  height: 50,
                  margin: "0 auto 12px",
                  width: 50,
                }}
              >
                {/* SVG залишаємо як є */}
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none">
                    <path
                      fill="#000"
                      d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 ..."
                    />
                  </g>
                </svg>
              </div>

              <div style={{ paddingTop: 8 }}>
                <div
                  style={{
                    color: "#3897f0",
                    fontFamily: "Arial, sans-serif",
                    fontSize: 14,
                    fontWeight: 550,
                    lineHeight: "18px",
                  }}
                >
                  Переглянути цей допис в Instagram
                </div>
              </div>
            </a>

            <p
              style={{
                color: "#c9c8cd",
                fontFamily: "Arial, sans-serif",
                fontSize: 14,
                lineHeight: "17px",
                marginTop: 8,
                textAlign: "center",
              }}
            >
              <a
                href="https://www.instagram.com/p/DRwq2ZiiCIo/?utm_source=ig_embed&utm_campaign=loading"
                style={{
                  color: "#c9c8cd",
                  textDecoration: "none",
                }}
                target="_blank"
                rel="noreferrer"
              >
                Допис, поширений ПУХНАСТІ | Tafting
              </a>
            </p>
          </div>
        </blockquote>
      </li>
    </ul>
  );
}
