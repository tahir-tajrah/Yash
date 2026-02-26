import React from 'react'
import FAQright from './FAQright'

const arr = [
  { title: "How do palm payments work ?", desc: "Viie securely linked to your palm, connected to your wallet, and built to helo ou s end, track and manaae monco ettovtlessl" },
  { title: "How do I add a card to Link?", desc: "Viie securely linked to your palm, connected to your wallet, and built to helo ou s end, track and manaae monco ettovtlessl" },
  { title: "Is palm payment safe?", desc: "Viie securely linked to your palm, connected to your wallet, and built to helo ou s end, track and manaae monco ettovtlessl" },
  { title: "Can I remove a card anytime?", desc: "Viie securely linked to your palm, connected to your wallet, and built to helo ou s end, track and manaae monco ettovtlessl" },
  { title: "What happens if a payment fails?", desc: "Viie securely linked to your palm, connected to your wallet, and built to helo ou s end, track and manaae monco ettovtlessl" },
  { title: "Is palm payment safe?", desc: "Viie securely linked to your palm, connected to your wallet, and built to helo ou s end, track and manaae monco ettovtlessl" },
  { title: "How do I add a card to Link?", desc: "Viie securely linked to your palm, connected to your wallet, and built to helo ou s end, track and manaae monco ettovtlessl" }


]

const Rightmain = () => {
  return (
    <div>
      {arr.map((item, index) => (
        <FAQright
          key={index}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  )
}

export default Rightmain