'use client'

export default function page() {
  const configs = [
    {
      config: [
        ["ter", "ate", "ble", "der"],
        ["fil", "in", "im", "i"],
        ["i", "late", "mac", "un"],
        ["u", "vis", "af", "wa"]
      ],
      solution: [
        ["in", "vis", "i", "ble"],
        ["im", "mac", "u", "late"],
        ["af", "fil", "i", "ate"],
        ["un", "der", "wa", "ter"]
      ]
    },
    {
      config: [
        ["force", "ment", "al", "in"],
        ["for", "ma", "a", "in"],
        ["tive", "ma", "in", "in"],
        ["ri", "re", "te", "e"]
      ],
      solution: [
        ["ex", "am", "in", "ing"],
        ["re", "in", "force", "ment"],
        ["in", "for", "ma", "tive"],
        ["ma", "te", "ri", "al"]
      ]
    },
    {
      config: [
        ["al", "di", "me", "di"],
        ["cu", "cal", "cal", "me"],
        ["lat", "im", "ing", "i"],
        ["on", "ate", "ag", "chan"]
      ],
      solution: [
        ["me", "chan", "i", "cal"],
        ["cal", "cu", "lat", "ing"],
        ["im", "me", "di", "ate"],
        ["di", "ag", "on", "al"]
      ]
    }
  ]

  return (
    <div>
      {configs.map((config, configNum) => {
        return(
          <div>
            <button onClick={() => {return}}>Config {configNum}</button>
          </div>
        )
      })}
    </div>
  );
}
