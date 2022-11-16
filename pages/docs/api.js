import Head from '../../components/Header'
import Nav from '../../components/Navbar'

export default function APIDocs(){
  return(
    <>
   <Head />
   <Nav />
      <br />
      <center>
      <h1 className="text-indigo-500 text-center w-48 font-bold">
      Login Fricon API
      </h1>
        </center>
      <br />
      <div className="mockup-code  md:shrink-0">
  <pre data-prefix="$"><code>curl https://friconv1.kardespro.repl.co/public/_oauth/login?withCookie=true&key=apikeyhere</code></pre> 
  <pre data-prefix=">" className="text-warning"><code>requesting...</code></pre> 
  <pre data-prefix=">" className="text-success"><code>{`{success: true, message: "Logined Fricon API Endpoints With xxx Cookie"}`}</code></pre>
</div>
      <br />
       <center>
      <h1 className="text-indigo-500 text-center w-48 font-bold">
      Login With Fricon Intents
      </h1>
        </center>
      <br />
     
      <div className="mockup-code">
  <pre data-prefix="GET"><code>/public/_oauth/login?withCookie=true&key=apikeyhere&intents=0</code></pre>
</div>
      <br />
      <br />
    </>
  )
}