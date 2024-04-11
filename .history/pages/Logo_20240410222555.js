import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Logo.module.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Logo() {
    return(
        <>
            <Navigation/>
            
            <main className={`${styles.main}`}>

           
            
            <div className={styles.fullColour}>

            <div className={styles.fullColourText}>
            <h1 className={styles.title}>Logo</h1>
            <p className={styles.bio}>
                The logo for Clotho is designed to capture the essence of the app's features and personality.
                <ul>
                    <li> The bold and clean font used for the name "Clotho" ensures readability and brand recognition. Placing it at the forefront of the logo highlights the app's identity.</li>
                </ul>
            </p>
            </div>
            
            <div className={styles.fullColourImage}>
            <Image 
              src={'/images/LogoFullColourLight.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={400}
              height={260}
            />

            <Image 
              src={'/images/LogoFullColourDark.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={400}
              height={260}
            />
            </div>
            </div>

            <hr className={styles.line}/>

            <div className={styles.blackWhite}>

            <div className={styles.blackWhiteText}>
            <h1 className={styles.title}>Styleguide</h1>
            <p className={styles.bio}>
              Clotho is a closet organization app designed to assist users in managing their 
              clothes effectively. It keeps users updated with the latest fashion trends and 
              offers them access to a wide range of styles. Additionally, Clotho saves users 
              time by providing personalized mix-and-match advice based on factors such as 
              color, occasion, and more.
            </p>
            </div>
            
            <div className={styles.blackWhiteImage}>
            <Image 
              src={'/images/BlackLogo.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={400}
              height={260}
            />

            <Image 
              src={'/images/WhiteLogo.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={400}
              height={260}
            />
            </div>
            </div>

            <hr className={styles.line}/>


            <div className={styles.greyMono}>
            
            <div className={styles.greyMonoText}>
            <h1 className={styles.title}>Styleguide</h1>
            <p className={styles.bio}>
              Clotho is a closet organization app designed to assist users in managing their 
              clothes effectively. It keeps users updated with the latest fashion trends and 
              offers them access to a wide range of styles. Additionally, Clotho saves users 
              time by providing personalized mix-and-match advice based on factors such as 
              color, occasion, and more.
            </p>
            </div>
            <vl className={styles.vrLine}/>

            <div className={styles.greyMonoImage}>
            <div className={styles.greyImage}>
            <Image 
              src={'/images/GreyWhite.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={350}
              height={210}
            />

            <Image 
              src={'/images/GreyBlack.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={350}
              height={210}
            />
            </div>

            <div className={styles.monoImage}>
            <Image 
              src={'/images/MonoWhite.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={350}
              height={210}
            />

            <Image 
              src={'/images/MonoDark.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={350}
              height={210}
            />
            </div>
            </div>
            </div>

            <hr className={styles.line}/>


            <div className={styles.horiVert}>

            <div className={styles.horiVertImage}>
            <div className={styles.whiteImage}>
            <Image 
              src={'/images/VerticalWhite.svg'}
              alt="The logo of Clotho"
              className={styles.lightVertLogo}
              width={350}
              height={410}
            />

            <Image 
              src={'/images/LogoFullColourLight.svg'}
              alt="The logo of Clotho"
              className={styles.lightHoriLogo}
              width={350}
              height={210}
            />
            </div>

            <hr className={styles.hrLine}/>

            <div className={styles.darkImage}>
            <Image 
              src={'/images/VerticalDark.svg'}
              alt="The logo of Clotho"
              className={styles.darkVertLogo}
              width={350}
              height={410}
            />

            <Image 
              src={'/images/LogoFullColourDark.svg'}
              alt="The logo of Clotho"
              className={styles.darkHoriLogo}
              width={350}
              height={210}
            />
            </div>
            </div>
            <vl className={styles.vrLineHoriVert}/>
            <div className={styles.horiVertText}>
            <h1 className={styles.title}>Styleguide</h1>
            <p className={styles.bio}>
              Clotho is a closet organization app designed to assist users in managing their 
              clothes effectively. It keeps users updated with the latest fashion trends and 
              offers them access to a wide range of styles. Additionally, Clotho saves users 
              time by providing personalized mix-and-match advice based on factors such as 
              color, occasion, and more.
            </p>
            </div>
            

            </div>

            <hr className={styles.line}/>


            <div className={styles.alterSymbol}>
            
            <div className={styles.alter}>
            <div className={styles.alterImage}>
            <div className={styles.alterinImage}>
            <Image 
              src={'/images/AlterOne.svg'}
              alt="The logo of Clotho"
              className={styles.alterlogo}
              width={200}
              height={160}
            />

            <Image 
              src={'/images/AlterTwo.svg'}
              alt="The logo of Clotho"
              className={styles.alterlogo}
              width={200}
              height={160}
            />
            </div>
            </div>
            <div className={styles.alterText}>
            <h1 className={styles.title}>Styleguide</h1>
            <p className={styles.bio}>
              Clotho is a closet organization app designed to assist users in managing their 
              clothes effectively. It keeps users updated with the latest fashion trends and 
              offers them access to a wide range of styles. Additionally, Clotho saves users 
              time by providing personalized mix-and-match advice based on factors such as 
              color, occasion, and more.
            </p>
            </div>
            </div>

            <vl className={styles.vrLineThree}/>
            
            <div className={styles.symbol}>
            <div className={styles.symbolImage}>
            <div className={styles.symbolinImage}>
            <Image 
              src={'/images/SymbolOne.svg'}
              alt="The logo of Clotho"
              className={styles.symbollogo}
              width={200}
              height={160}
            />

            <Image 
              src={'/images/SymbolTwo.svg'}
              alt="The logo of Clotho"
              className={styles.symbollogo}
              width={200}
              height={160}
            />
            </div>
            </div>
            <div className={styles.symbolText}>
            <h1 className={styles.title}>Styleguide</h1>
            <p className={styles.bio}>
              Clotho is a closet organization app designed to assist users in managing their 
              clothes effectively. It keeps users updated with the latest fashion trends and 
              offers them access to a wide range of styles. Additionally, Clotho saves users 
              time by providing personalized mix-and-match advice based on factors such as 
              color, occasion, and more.
            </p>
            </div>
            </div>


            </div>
            
            <hr className={styles.line}/>


            <div className={styles.favicon}>
            <h1 className={styles.title}>Styleguide</h1>

            <div className={styles.faviconOne}>
            <Image 
              src={'/images/favicon-16x16.ico'}
              alt="The logo of Clotho"
              className={styles.favilogo}
              width={16}
              height={16}
            />
            <p className={styles.bio}>
              Clotho is a closet organization app designed to assist users in managing their 
              clothes effectively. It keeps users updated with the latest fashion trends and 
              offers them access to a wide range of styles. Additionally, Clotho saves users 
              time by providing personalized mix-and-match advice based on factors such as 
              color, occasion, and more.
            </p>
            </div>

            <div className={styles.faviconTwo}>
            <Image 
              src={'/images/favicon-32x32.ico'}
              alt="The logo of Clotho"
              className={styles.favitwologo}
              width={32}
              height={32}
            />
            <p className={styles.bio}>
              Clotho is a closet organization app designed to assist users in managing their 
              clothes effectively. It keeps users updated with the latest fashion trends and 
              offers them access to a wide range of styles. Additionally, Clotho saves users 
              time by providing personalized mix-and-match advice based on factors such as 
              color, occasion, and more.
            </p>
            </div>

            <div className={styles.faviconThree}>
            <Image 
              src={'/images/favicon-48x48.ico'}
              alt="The logo of Clotho"
              className={styles.favithreelogo}
              width={48}
              height={48}
            />
            
            <p className={styles.bio}>
              Clotho is a closet organization app designed to assist users in managing their 
              clothes effectively. It keeps users updated with the latest fashion trends and 
              offers them access to a wide range of styles. Additionally, Clotho saves users 
              time by providing personalized mix-and-match advice based on factors such as 
              color, occasion, and more.
            </p>
            </div>

            </div>
            
            


            

            <div className={styles.footer}>
                <Footer/>
            </div>
            </main>


        </>
    )
}


