"use client";

import { useEffect, useState } from "react";

const TEMPOS = {
  pomodoro: 25 * 60,
  "pausa-curta": 5 * 60,
  "pausa-longa": 15 * 60,
} as const;

type Modo = keyof typeof TEMPOS;

export default function Home() {
  const [modoAtual, setModoAtual] = useState<Modo>("pomodoro");
  const [tempo, setTempo] = useState(TEMPOS["pomodoro"]);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    let intervalo: NodeJS.Timeout;

    if (ativo && tempo > 0) {
      intervalo = setInterval(() => {
        setTempo((t) => t - 1);
      }, 1000);
    } else if (tempo === 0) {
      setAtivo(false);
      alert("Tempo esgotado!");
    }

    return () => clearInterval(intervalo);
  }, [ativo, tempo]);

  useEffect(() => {
    setTempo(TEMPOS[modoAtual]);
    setAtivo(false);
  }, [modoAtual]);

  const formatarTempo = (segundos: number) => {
    const min = Math.floor(segundos / 60);
    const seg = segundos % 60;
    return `${String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}`;
  };

  const iniciar = () => {
    if (!ativo) setAtivo(true);
  };

  const resetar = () => {
    setTempo(TEMPOS[modoAtual]);
    setAtivo(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white gap-8 p-4">
      <h1 className="text-3xl font-bold">Pomodoro Timer</h1>

      {/* Botões de modo */}
      <div className="flex gap-4">
        {(["pomodoro", "pausa-curta", "pausa-longa"] as Modo[]).map((modo) => (
          <button
            key={modo}
            onClick={() => setModoAtual(modo)}
            className={`px-4 py-2 rounded ${
              modoAtual === modo
                ? "bg-red-500"
                : "bg-zinc-700 hover:bg-zinc-600"
            }`}
          >
            {modo === "pomodoro" && "Pomodoro"}
            {modo === "pausa-curta" && "Pausa Curta"}
            {modo === "pausa-longa" && "Pausa Longa"}
          </button>
        ))}
      </div>

      <div className="text-6xl font-mono">{formatarTempo(tempo)}</div>

      <div className="flex gap-4">
        <button
          onClick={iniciar}
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
        >
          Iniciar
        </button>
        <button
          onClick={resetar}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        >
          Resetar
        </button>
      </div>
    </main>
  );
}
