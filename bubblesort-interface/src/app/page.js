"use client";
import { useState } from "react";
import InputId from "@/components/InputId";

export default function Home() {

  const [array1, setArray1] = useState()
  const [array2, setArray2] = useState()
  const [array3, setArray3] = useState()
  const [array4, setArray4] = useState()
  const [array5, setArray5] = useState()
  const [array6, setArray6] = useState()
  const [array7, setArray7] = useState()
  const [arrayInicial, setarrayInicial] = useState([])
  const [arrayArrumado, setarrayArrumado] = useState([])

  const embaralhar = (arrayEmbaralhado) => {
    // console.log(arrayEmbaralhado)
    var len = arrayEmbaralhado.length;
    var swapped;

    do {
      swapped = false;

      for (var i = 0; i < len - 1; i++) {
        if (arrayEmbaralhado[i] > arrayEmbaralhado[i + 1]) {
          var temp = arrayEmbaralhado[i];
          arrayEmbaralhado[i] = arrayEmbaralhado[i + 1];
          arrayEmbaralhado[i + 1] = temp;
          swapped = true;
        }
      }

      len--;
    } while (swapped);
    console.log(arrayEmbaralhado)

    let arrfinal = []
    for (let i = 0; i <= arrayEmbaralhado.length - 1; i++) {
      arrfinal.push(<InputId numero={arrayEmbaralhado[i]} />)
    }
    arrfinal.reverse()
    setarrayArrumado(arrfinal);
    // setarrayArrumado(arrayEmbaralhado);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <div className=" text-center flex-col before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <p className="uppercase text-7xlg">
          Bubble Sort
        </p>
        <p>
          com interface gráfica.
        </p>
      </div>
      <div>
        <input onChange={(e) => setArray1(+e.target.value)} type="number" max={99} min={-99} size={3} className="bg-white m-2 border-teal-700 border-solid border-4 h-20 w-20 p-1 text-teal-800 text-2xl text-center font-bold appearance-none focus:outline-none" />
        <input onChange={(e) => setArray2(+e.target.value)} type="number" max={99} min={-99} size={3} className="bg-white m-2 border-teal-700 border-solid border-4 h-20 w-20 p-1 text-teal-800 text-2xl text-center font-bold appearance-none focus:outline-none" />
        <input onChange={(e) => setArray3(+e.target.value)} type="number" max={99} min={-99} size={3} className="bg-white m-2 border-teal-700 border-solid border-4 h-20 w-20 p-1 text-teal-800 text-2xl text-center font-bold appearance-none focus:outline-none" />
        <input onChange={(e) => setArray4(+e.target.value)} type="number" max={99} min={-99} size={3} className="bg-white m-2 border-teal-700 border-solid border-4 h-20 w-20 p-1 text-teal-800 text-2xl text-center font-bold appearance-none focus:outline-none" />
        <input onChange={(e) => setArray5(+e.target.value)} type="number" max={99} min={-99} size={3} className="bg-white m-2 border-teal-700 border-solid border-4 h-20 w-20 p-1 text-teal-800 text-2xl text-center font-bold appearance-none focus:outline-none" />
        <input onChange={(e) => setArray6(+e.target.value)} type="number" max={99} min={-99} size={3} className="bg-white m-2 border-teal-700 border-solid border-4 h-20 w-20 p-1 text-teal-800 text-2xl text-center font-bold appearance-none focus:outline-none" />
        <input onChange={(e) => setArray7(+e.target.value)} type="number" max={99} min={-99} size={3} className="bg-white m-2 border-teal-700 border-solid border-4 h-20 w-20 p-1 text-teal-800 text-2xl text-center font-bold appearance-none focus:outline-none" />
      </div>

      <div>
        Array Arrumado
      </div>
      <div className="flex-row w-auto flex-wrap ">
        {arrayArrumado}
      </div>

      <div className="flex-col mb-32 text-center lg:mb-0">
        <div className=" cursor-pointer mb-3 border rounded-lg bg-blue-400 text-black items-center justify-center hover:bg-blue-200 ">
          <button onClick={async () => {
            setarrayInicial([array1, array2, array3, array4, array5, array6, array7])
            embaralhar(arrayInicial)
          }} className={`text-2xl font-semibold`}>Bubble Sort</button>
        </div>
        <div>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            aviãozinho.
          </p>
        </div>
        <div className="flex mt-7 text h-6 w-full items-center justify-center font-thin">
            Developed by <p className=" font-semibold ml-1"><a target={"_blank"} rel="noreferrer" href={'https://github.com/alan-cavalcante'}>Alan Cavalcante</a></p>
        </div>
      </div>
    </main>
  )
}
