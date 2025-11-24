import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passRef = useRef(null);

  useEffect(() => {
    let pass = "";
    let passStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      passStr += "0123456789";
    }
    if (charAllowed) {
      passStr += "!@#$%^&*-_+=[]{}~`";
    }
    for (let index = 1; index <= length; index++) {
      let item = Math.floor(Math.random() * passStr.length);
      pass += passStr.charAt(item);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 32);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
        <div className="bg-gray-800 shadow-xl rounded-2xl p-6 w-full max-w-md space-y-6">
          <h1 className="text-2xl font-semibold text-center">
            Password Generator
          </h1>
          <div>
            <input
              type="text"
              readOnly
              className="w-full p-3 border rounded-xl focus:outline-none text-gray-200"
              value={password}
              ref={passRef}
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="numbers"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="numbers" className="text-sm">
                Include Numbers
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="specialChars"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="specialChars" className="text-sm">
                Include Special Characters
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Length: {length}</p>
            <input
              type="range"
              min="8"
              max="32"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <button
            onClick={copyToClipboard}
            className="w-full bg-gray-700 text-white hover:bg-gray-600 p-3 rounded-xl"
          >
            Copy password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
