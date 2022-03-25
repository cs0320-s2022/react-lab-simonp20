import React, {useState} from 'react';
import logo from './logo.svg';
import TextBox from './TextBox';
//@ts-ignore
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";

function Horoscope() {

    const [sun, setSun] = useState("");
    const [moon, setMoon] = useState("");
    const [rising, setRising] = useState("");

    const [horoscope, setHoroscope] = useState<string[]>([]);

    interface ServerRequest {
        sun: string,
        moon: string,
        rising: string
    }

    interface ResponseData {
        response: string[]
    }

    const requestHoroscope = async () => {
        console.log(sun)
        console.log(moon)
        console.log(rising)
        const request: ServerRequest = {
            sun: sun,
            moon: moon,
            rising:rising
        }
        const promise = await fetch('http://localhost:4567/horoscope', {
            method: 'post',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/Json'
            }
        });
        const response: ResponseData = await promise.json();
        // console.log(response)
        setHoroscope(response.response)
        console.log(horoscope)
    }

    return (
        <div className="Horoscope">
        <header className="Horoscope-header">
          <TextBox label={"Sun Sign"} changeHandler={setSun}/>
          <TextBox label={"Moon Sign"} changeHandler={setMoon}/>
          <TextBox label={"Rising Sign"} changeHandler={setRising}/>
          <AwesomeButton onPress={requestHoroscope}>Submit</AwesomeButton>
        </header>
        <ul>
          {horoscope.map(item => <li>{item}</li>)}
        </ul>
      </div>
    );
  }
  
  export default Horoscope;