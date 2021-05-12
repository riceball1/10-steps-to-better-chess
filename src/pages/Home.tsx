const anime = require('animejs');

type Props = {
  onPageChange: (
    value: string | number | React.MouseEventHandler<HTMLParagraphElement>
  ) => void;
};

function Home(props: Props) {

  const section = document.querySelector('section');
const chess = document.querySelector('#chess');

section?.addEventListener('click', action, { once: true })

let offset = '-=200'
let base = 104

function action() {
  chess?.remove()
  let tl = anime.timeline({
    duration: 400,
    loop: true
  })

  tl.add({ targets: 'div:nth-child(1)', translateY: -base })
    .add(
      {
        targets: 'div:nth-child(2)',
        translateY: -base,
        translateX: base
      },
      offset
    )
    .add({ targets: 'div:nth-child(3)', translateX: base }, offset)
    .add(
      {
        targets: 'div:nth-child(4)',
        translateY: base,
        translateX: base
      },
      offset
    )
    .add({ targets: 'div:nth-child(5)', translateY: base }, offset)
    .add(
      {
        targets: 'div:nth-child(6)',
        translateY: base,
        translateX: -base
      },
      offset
    )
    .add({ targets: 'div:nth-child(7)', translateX: -base }, offset)
    .add(
      {
        targets: 'div:nth-child(8)',
        translateY: -base,
        translateX: -base
      },
      offset
    )
    .add({
      targets: 'div',
      rotate: 90,
      easing: 'linear',
      duration: 400
    })
    .add({
      targets: 'div',
      translateY: 0,
      translateX: 0,
      delay: anime.stagger(base, { direction: 'reverse' })
    })
    .add({ targets: section, rotate: 90 })
}

  return (
    <section>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div id="chess"><h1>Chess</h1></div>
  </section>
  );
}

export default Home;
