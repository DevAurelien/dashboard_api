import { useState, useEffect } from "react";

const GraphRond = () => {
  const afterburnerSpeed = 1200; // Valeur de l'Afterburner
  const scmSpeed = 600; // Valeur du SCM Speed
  const maxValue = afterburnerSpeed + 200; // Valeur maximale ajustée
  const center = 60;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeWidth = 6;
  const colors = ["blue", "orange"]; // Couleurs utilisées
  const labels = ["SCM Speed", "Afterburner Speed"]; // Légendes

  // États pour animer les valeurs numériques des rectangles
  const [values, setValues] = useState({ scm: 0, afterburner: 0 });
  const [progress, setProgress] = useState({ scm: 0, afterburner: 0 });

  useEffect(() => {
    setProgress({ scm: 0, afterburner: 0 });
    setValues({ scm: 0, afterburner: 0 });

    setTimeout(() => {
      // Animation des cercles
      setProgress({ scm: scmSpeed, afterburner: afterburnerSpeed });

      // Animation des valeurs numériques en mode "timer rapide"
      let intervalScm = setInterval(() => {
        setValues((prev) => {
          if (prev.scm >= scmSpeed) {
            clearInterval(intervalScm);
            return prev;
          }
          return { ...prev, scm: prev.scm + 20 };
        });
      }, 33); // Environ 600 en 1 seconde

      let intervalAfterburner = setInterval(() => {
        setValues((prev) => {
          if (prev.afterburner >= afterburnerSpeed) {
            clearInterval(intervalAfterburner);
            return prev;
          }
          return { ...prev, afterburner: prev.afterburner + 20 };
        });
      }, 33);
    }, 500); // Lancement après un court délai
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center space-x-6">
        {/* Graphique SVG */}
        <svg className="w-40 h-40" viewBox="0 0 120 120">
          {/* Cercle de référence */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="gray"
            strokeWidth='0.2'
            opacity={0.3}
            transform={`rotate(-90 ${center} ${center})`}
          />
          {/* Partie en orange (Afterburner Speed) */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="orange"
            strokeWidth={strokeWidth-1.2}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (progress.afterburner / maxValue) * circumference}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 2s ease-in-out" }}
            transform={`rotate(-90 ${center} ${center})`}
          />{/* Partie en bleu (SCM Speed) */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="blue"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (progress.scm / maxValue) * circumference}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 2s ease-in-out" }}
            transform={`rotate(-90 ${center} ${center})`}
          />
        </svg>

        {/* Légendes et rectangles colorés à droite du cercle */}
        <div className="flex flex-col space-y-2">
          {labels.map((label, index) => (
            <div key={index} className="flex items-center space-x-2">
              {/* Rectangle coloré avec la valeur correspondante */}
              <div
                className="w-12 h-8 flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: colors[index] }}
              >
                {index === 0 ? values.scm : values.afterburner}
              </div>
              {/* Texte de la légende */}
              <span className="text-white text-base">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraphRond;
