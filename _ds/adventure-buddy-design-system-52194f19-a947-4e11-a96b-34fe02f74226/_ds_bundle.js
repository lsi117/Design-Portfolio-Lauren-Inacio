/* @ds-bundle: {"format":3,"namespace":"AdventureBuddyDesignSystem_52194f","components":[],"sourceHashes":{"ui_kits/app/app.jsx":"1c43183b79f3","ui_kits/app/primitives.jsx":"12c939c6fe1a","ui_kits/app/screens-detail.jsx":"02a7ab640290","ui_kits/app/screens-discover.jsx":"993ffa7863d4","ui_kits/app/screens-safety.jsx":"78e994783e88","ui_kits/app/screens-social.jsx":"4e3293e0734b","ui_kits/web/app.jsx":"66ef31dcc0b9","ui_kits/web/parts.jsx":"1694abf79ccf","ui_kits/web/parts2.jsx":"213f6cb72516"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AdventureBuddyDesignSystem_52194f = window.AdventureBuddyDesignSystem_52194f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/app/app.jsx
try { (() => {
/* Adventure Buddy — App data + shell + router */

const HIKES = [{
  id: 'h1',
  name: 'Cascade Pass loop',
  location: 'North Cascades, WA',
  scene: 'dawn',
  photo: '../../assets/photos/aspen-trail.jpg',
  icon: 'sunrise',
  when: 'Sat · sunrise',
  distance: '4.2 mi',
  gain: '380 m',
  time: '~2 hr',
  level: {
    kind: 'mod',
    label: 'Moderate'
  },
  saved: false,
  going: ['M', 'J', 'A'],
  extra: 3,
  goingCount: 6,
  host: {
    initial: 'J',
    name: 'Jonah K.',
    verified: true,
    meta: 'Hosted 24 hikes · 4.9 ★'
  },
  description: 'A gentle climb to one of the best sunrise spots in the range. We\u2019ll meet at the trailhead before dawn, take it slow, and watch the light come up over the peaks together. All paces welcome.',
  buddies: [{
    initial: 'M',
    name: 'Maya',
    presence: 'online'
  }, {
    initial: 'A',
    name: 'Amara'
  }, {
    initial: 'R',
    name: 'Rai',
    presence: 'away'
  }, {
    initial: 'L',
    name: 'Leo'
  }]
}, {
  id: 'h2',
  name: 'Fern Canyon trail',
  location: 'Redwood Coast, CA',
  scene: 'forest',
  photo: '../../assets/photos/meadow-trail.jpg',
  icon: 'trees',
  when: 'Sun morning',
  distance: '2.8 mi',
  gain: '120 m',
  time: '~1.5 hr',
  level: {
    kind: 'easy',
    label: 'Easy'
  },
  saved: true,
  going: ['R', 'S'],
  extra: 1,
  goingCount: 3,
  host: {
    initial: 'A',
    name: 'Amara T.',
    verified: true,
    meta: 'Hosted 11 hikes · 5.0 ★'
  },
  description: 'An easy, shaded wander through open meadows and rolling hills. Perfect for a slow morning and good conversation. Dog-friendly.',
  buddies: [{
    initial: 'R',
    name: 'Rai',
    presence: 'online'
  }, {
    initial: 'S',
    name: 'Sam'
  }, {
    initial: 'T',
    name: 'Theo'
  }]
}, {
  id: 'h3',
  name: 'Eagle Ridge sunset',
  location: 'Boulder, CO',
  scene: 'ridge',
  photo: '../../assets/photos/berries-summit.jpg',
  icon: 'mountain-snow',
  when: 'Fri · 5pm',
  distance: '5.6 mi',
  gain: '520 m',
  time: '~3 hr',
  level: {
    kind: 'hard',
    label: 'Strenuous'
  },
  saved: false,
  going: ['T', 'N', 'L'],
  extra: 5,
  goingCount: 8,
  host: {
    initial: 'L',
    name: 'Leo M.',
    verified: false,
    meta: 'Hosted 7 hikes · 4.8 ★'
  },
  description: 'A steady ridge climb rewarded with wide-open summit views. Bring layers and water \u2014 we\u2019ll regroup at the top and head down together before dark.',
  buddies: [{
    initial: 'T',
    name: 'Theo',
    presence: 'online'
  }, {
    initial: 'N',
    name: 'Nadia'
  }, {
    initial: 'L',
    name: 'Leo'
  }]
}, {
  id: 'h4',
  name: 'Mirror Lake walk',
  location: 'Mt. Hood, OR',
  scene: 'lake',
  photo: '../../assets/photos/lake-dog.jpg',
  icon: 'footprints',
  when: 'Next Sat',
  distance: '3.1 mi',
  gain: '90 m',
  time: '~1.5 hr',
  level: {
    kind: 'easy',
    label: 'Easy'
  },
  saved: false,
  going: ['S', 'M'],
  extra: 0,
  goingCount: 2,
  host: {
    initial: 'S',
    name: 'Sam P.',
    verified: true,
    meta: 'Hosted 18 hikes · 4.9 ★'
  },
  description: 'A flat, friendly loop around a still alpine lake with golden aspens and a dog-friendly shoreline. A lovely first hike \u2014 no rush, lots of photo stops.',
  buddies: [{
    initial: 'S',
    name: 'Sam',
    presence: 'online'
  }, {
    initial: 'M',
    name: 'Maya'
  }]
}];
const BUDDIES = [{
  id: 'b1',
  initial: 'A',
  name: 'Amara',
  distance: '1.2 mi away',
  presence: 'online',
  verified: true,
  bio: 'Sunrise person. Loves slow, chatty hikes and a good thermos of coffee.',
  tags: ['Easy\u2013moderate pace', 'Sunrise', 'Dog parent']
}, {
  id: 'b2',
  initial: 'T',
  name: 'Theo',
  distance: '3.4 mi away',
  verified: false,
  bio: 'New to the area, looking for a weekend crew to explore the local trails with.',
  tags: ['New to hiking', 'Weekends', 'Photography']
}, {
  id: 'b3',
  initial: 'N',
  name: 'Nadia',
  distance: '2.0 mi away',
  presence: 'away',
  verified: true,
  bio: 'Trail runner trying to slow down and actually enjoy the view for once.',
  tags: ['Moderate pace', 'Ridge lines', 'Early starts']
}, {
  id: 'b4',
  initial: 'R',
  name: 'Rai',
  distance: '0.8 mi away',
  presence: 'online',
  verified: true,
  bio: 'Backpacking obsessed. Happy to mentor anyone planning a first overnighter.',
  tags: ['Backpacking', 'Patient guide', 'Maps nerd']
}];
const THREADS = [{
  id: 't1',
  initial: 'J',
  name: 'Cascade Pass crew',
  presence: 'online',
  time: 'now',
  last: 'Jonah: meet at the lower lot at 5:15?',
  unread: 2,
  messages: [{
    text: 'So excited for Saturday! First sunrise hike with the group 🌄',
    me: false
  }, {
    text: 'Same! What should I bring?',
    me: true
  }, {
    text: 'Layers, water, and a headlamp for the start. I\u2019ll bring coffee for everyone.',
    me: false
  }, {
    text: 'meet at the lower lot at 5:15?',
    me: false
  }]
}, {
  id: 't2',
  initial: 'A',
  name: 'Amara',
  presence: 'online',
  time: '2h',
  last: 'You: see you on the trail!',
  unread: 0,
  messages: [{
    text: 'Thanks for the wave! Want to do the Fern Canyon walk this weekend?',
    me: false
  }, {
    text: 'I\u2019d love that. Sunday morning works for me.',
    me: true
  }, {
    text: 'Perfect, see you on the trail!',
    me: true
  }]
}, {
  id: 't3',
  initial: 'R',
  name: 'Rai',
  presence: 'away',
  time: 'Yesterday',
  last: 'Rai: I can show you how to pack for it',
  unread: 0,
  messages: [{
    text: 'Heard you\u2019re planning a first overnighter — I can show you how to pack for it',
    me: false
  }]
}];
function StatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "statusbar"
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("div", {
    className: "right"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "signal",
    size: 16
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    size: 16
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery-full",
    size: 18
  })));
}
function TabBar({
  tab,
  setTab
}) {
  const item = (id, icon, label) => /*#__PURE__*/React.createElement("button", {
    className: `tab${tab === id ? ' on' : ''}`,
    onClick: () => setTab(id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 23
  })), label);
  return /*#__PURE__*/React.createElement("div", {
    className: "tabbar"
  }, item('discover', 'compass', 'Discover'), item('hikes', 'map', 'Hikes'), /*#__PURE__*/React.createElement("button", {
    className: "tab-fab",
    title: "Find buddies",
    onClick: () => setTab('buddies')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-round-plus",
    size: 24
  })), item('chats', 'message-circle', 'Chats'), item('you', 'user-round', 'You'));
}
function HikesTab({
  hikes,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "screen-scroll screen-enter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section",
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      fontSize: 27,
      margin: 0
    }
  }, "Your hikes")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '14px 20px 4px'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    active: true,
    icon: "check"
  }, "Upcoming"), /*#__PURE__*/React.createElement(Chip, null, "Saved"), /*#__PURE__*/React.createElement(Chip, null, "Past")), /*#__PURE__*/React.createElement("div", {
    className: "section",
    style: {
      marginTop: 12,
      paddingBottom: 110
    }
  }, hikes.slice(0, 2).map(h => /*#__PURE__*/React.createElement(HikeCard, {
    key: h.id,
    hike: h,
    onOpen: onOpen
  }))));
}
function YouTab() {
  return /*#__PURE__*/React.createElement("div", {
    className: "screen-scroll screen-enter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section",
    style: {
      paddingTop: 8,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initial: "M",
    size: 88,
    presence: "online",
    style: {
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      fontSize: 26,
      margin: '14px 0 2px'
    }
  }, "Maya Okafor"), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'center',
      gap: 5,
      color: 'var(--lavender-600)',
      fontSize: 13,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check",
    size: 15
  }), "Verified hiker \xB7 Portland, OR"), /*#__PURE__*/React.createElement("div", {
    className: "row card",
    style: {
      marginTop: 20,
      padding: '16px 8px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat",
    style: {
      fontSize: 20,
      color: 'var(--fg-1)'
    }
  }, "34"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--fg-3)'
    }
  }, "hikes")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 32,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat",
    style: {
      fontSize: 20,
      color: 'var(--fg-1)'
    }
  }, "112 mi"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--fg-3)'
    }
  }, "this year")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 32,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat",
    style: {
      fontSize: 20,
      color: 'var(--fg-1)'
    }
  }, "18"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--fg-3)'
    }
  }, "buddies")))), /*#__PURE__*/React.createElement("div", {
    className: "section",
    style: {
      marginTop: 18,
      paddingBottom: 110
    }
  }, [['settings', 'Preferences & pace'], ['shield-check', 'Safety & trusted contacts'], ['heart', 'Saved trails'], ['circle-help', 'Help & community guidelines']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "row",
    style: {
      gap: 13,
      padding: '15px 4px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20,
    style: {
      color: 'var(--fg-2)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 15,
      fontWeight: 500
    }
  }, t), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    style: {
      color: 'var(--fg-3)'
    }
  })))));
}
function App() {
  const [tab, setTab] = React.useState('discover');
  const [detail, setDetail] = React.useState(null);
  const [thread, setThread] = React.useState(null);
  const [sheet, setSheet] = React.useState(null);
  const [joined, setJoined] = React.useState({});
  const openHike = h => setDetail(h);
  const join = () => {
    setJoined(j => ({
      ...j,
      [detail.id]: true
    }));
    setSheet(detail);
  };
  let screen;
  if (thread) screen = /*#__PURE__*/React.createElement(ThreadScreen, {
    thread: thread,
    onBack: () => setThread(null)
  });else if (detail) screen = /*#__PURE__*/React.createElement(HikeDetailScreen, {
    hike: detail,
    joined: joined[detail.id],
    onBack: () => setDetail(null),
    onJoin: join
  });else if (tab === 'discover') screen = /*#__PURE__*/React.createElement(DiscoverScreen, {
    hikes: HIKES,
    onOpen: openHike
  });else if (tab === 'hikes') screen = /*#__PURE__*/React.createElement(HikesTab, {
    hikes: HIKES,
    onOpen: openHike
  });else if (tab === 'chats') screen = /*#__PURE__*/React.createElement(ChatsScreen, {
    threads: THREADS,
    onOpen: setThread
  });else if (tab === 'you') screen = /*#__PURE__*/React.createElement(YouTab, null);else if (tab === 'buddies') screen = /*#__PURE__*/React.createElement(BuddiesScreen, {
    buddies: BUDDIES
  });
  const showChrome = !detail && !thread;
  return /*#__PURE__*/React.createElement("div", {
    className: "stage"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "kit-aside"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal.svg",
    height: "36",
    alt: "Adventure Buddy",
    style: {
      marginBottom: 22
    }
  }), /*#__PURE__*/React.createElement("h1", null, "The app, brought to life"), /*#__PURE__*/React.createElement("p", null, "A click-through of Adventure Buddy. Discover a hike, open the detail, join it, and walk through the trail check-in. Switch tabs and open a chat too."), /*#__PURE__*/React.createElement("div", {
    className: "pill-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pill"
  }, "Discover"), /*#__PURE__*/React.createElement("span", {
    className: "pill"
  }, "Hike detail"), /*#__PURE__*/React.createElement("span", {
    className: "pill"
  }, "Find buddies"), /*#__PURE__*/React.createElement("span", {
    className: "pill"
  }, "Chats"), /*#__PURE__*/React.createElement("span", {
    className: "pill"
  }, "Trail check-in"), /*#__PURE__*/React.createElement("span", {
    className: "pill"
  }, "Profile"))), /*#__PURE__*/React.createElement("div", {
    className: "phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "notch"
  }), /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, screen), tab === 'buddies' && null, showChrome && /*#__PURE__*/React.createElement(TabBar, {
    tab: tab,
    setTab: t => {
      setDetail(null);
      setThread(null);
      setTab(t);
    }
  }), sheet && /*#__PURE__*/React.createElement(SafetySheet, {
    hike: sheet,
    onClose: () => setSheet(null)
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/primitives.jsx
try { (() => {
/* Adventure Buddy — App kit primitives */

// Lucide icon helper — renders an <i> Lucide hydrates after mount.
function Icon({
  name,
  size,
  stroke = 1.75,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          'stroke-width': stroke
        },
        nameAttr: 'data-lucide'
      });
      const svg = ref.current.querySelector('svg');
      if (svg && size) {
        svg.style.width = size + 'px';
        svg.style.height = size + 'px';
      }
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      ...style
    }
  });
}
function Button({
  variant = 'primary',
  icon,
  children,
  block,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: `btn btn-${variant}${block ? ' btn-block' : ''}`,
    onClick: onClick,
    style: style
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon
  }), children);
}
function Chip({
  active,
  icon,
  children,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: `chip${active ? ' on' : ''}`,
    onClick: onClick
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon
  }), children);
}
function Tag({
  kind = 'easy',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `tag tag-${kind}`
  }, children);
}
const AVATAR_BG = {
  M: 'var(--pine-400)',
  J: 'var(--lavender-400)',
  A: 'var(--honey-400)',
  R: 'var(--sage-500)',
  S: 'var(--clay-500)',
  L: 'var(--pine-600)',
  T: 'var(--lavender-500)',
  N: 'var(--stone-500)'
};
function Avatar({
  initial,
  size = 40,
  presence,
  verified,
  style
}) {
  const ps = Math.round(size * 0.26);
  return /*#__PURE__*/React.createElement("div", {
    className: "avatar",
    style: {
      width: size,
      height: size,
      fontSize: size * 0.38,
      background: AVATAR_BG[initial] || 'var(--pine-400)',
      ...style
    }
  }, initial, presence && /*#__PURE__*/React.createElement("span", {
    className: "presence",
    style: {
      width: ps,
      height: ps,
      background: presence === 'away' ? 'var(--stone-400)' : 'var(--pine-500)'
    }
  }), verified && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: -2,
      right: -2,
      width: size * 0.36,
      height: size * 0.36,
      borderRadius: '50%',
      background: 'var(--lavender-500)',
      border: '2.5px solid var(--bg-surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: size * 0.2,
    stroke: 3,
    style: {
      color: '#fff'
    }
  })));
}
function AvatarStack({
  people,
  extra,
  size = 28
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      paddingLeft: 8
    }
  }, people.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginLeft: -8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initial: p,
    size: size,
    style: {
      border: '2.5px solid var(--bg-surface)'
    }
  }))), extra > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: -8,
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--stone-200)',
      color: 'var(--fg-2)',
      border: '2.5px solid var(--bg-surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size * 0.34,
      fontWeight: 700
    }
  }, "+", extra));
}

// Photo — accepts real image src OR a gradient fallback.
function Photo({
  src,
  gradient,
  height,
  radius = 0,
  icon = 'mountain-snow',
  protect,
  children,
  style
}) {
  const bgStyle = src ? {
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  } : {
    background: gradient
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "photo",
    style: {
      height,
      borderRadius: radius,
      ...bgStyle,
      ...style
    }
  }, !src && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      color: '#fff',
      opacity: .3
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: Math.min(46, height * 0.3),
    stroke: 1.4
  })), protect && /*#__PURE__*/React.createElement("div", {
    className: "protect",
    style: {
      background: 'linear-gradient(to top, rgba(26,43,34,.72), rgba(26,43,34,.02) 55%)'
    }
  }), children);
}

// Soft topographic-ish gradient palettes used as photo placeholders
const SCENES = {
  pass: 'linear-gradient(155deg,#8FAC7D,#3A6B57 58%,#2C4A38)',
  dawn: 'linear-gradient(160deg,#E4B364,#C98F5A 45%,#5C6E55)',
  ridge: 'linear-gradient(150deg,#A7B89C,#5E8E70 55%,#314E3A)',
  forest: 'linear-gradient(160deg,#6E9276,#365B45 60%,#1F3026)',
  lake: 'linear-gradient(150deg,#AEC5C0,#5E8E8E 50%,#3A5E5A)',
  meadow: 'linear-gradient(155deg,#C9CFA0,#8FAC7D 55%,#5C7949)'
};
Object.assign(window, {
  Icon,
  Button,
  Chip,
  Tag,
  Avatar,
  AvatarStack,
  Photo,
  SCENES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/screens-detail.jsx
try { (() => {
/* Adventure Buddy — Hike detail screen */

function DetailStat({
  icon,
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    style: {
      color: 'var(--pine-500)',
      justifyContent: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "stat",
    style: {
      fontSize: 16,
      color: 'var(--fg-1)',
      marginTop: 5
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--fg-3)',
      marginTop: 1
    }
  }, label));
}
function HikeDetailScreen({
  hike,
  onBack,
  onJoin,
  joined
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "screen-enter",
    style: {
      position: 'absolute',
      inset: 0,
      overflowY: 'auto',
      background: 'var(--bg-canvas)'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: hike.photo,
    gradient: SCENES[hike.scene],
    height: 320,
    icon: hike.icon || 'mountain-snow',
    protect: true
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      position: 'absolute',
      top: 58,
      left: 18,
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.92)',
      border: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 20,
    style: {
      color: 'var(--fg-1)'
    }
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      position: 'absolute',
      top: 58,
      right: 18,
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.92)',
      border: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 19,
    style: {
      color: 'var(--clay-500)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    kind: hike.level.kind
  }, hike.level.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: '#fff',
      background: 'rgba(255,255,255,.2)',
      backdropFilter: 'blur(8px)',
      padding: '4px 10px',
      borderRadius: 999
    }
  }, hike.when)), /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      fontSize: 30,
      color: '#fff',
      margin: '8px 0 0'
    }
  }, hike.name), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 4,
      color: 'rgba(255,255,255,.9)',
      fontSize: 14,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14
  }), hike.location))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 130px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row card",
    style: {
      padding: '16px 8px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(DetailStat, {
    icon: "route",
    value: hike.distance,
    label: "distance"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 38,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement(DetailStat, {
    icon: "trending-up",
    value: hike.gain,
    label: "elevation"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 38,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement(DetailStat, {
    icon: "clock",
    value: hike.time,
    label: "est. time"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: 22,
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initial: hike.host.initial,
    size: 48,
    verified: hike.host.verified
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600
    }
  }, "Hosted by ", hike.host.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--fg-3)'
    }
  }, hike.host.meta)), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    style: {
      padding: '9px 16px',
      fontSize: 14
    }
  }, "View")), /*#__PURE__*/React.createElement("p", {
    className: "h-display",
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--fg-2)',
      marginTop: 20
    }
  }, hike.description), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'space-between',
      marginTop: 24,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-display",
    style: {
      fontSize: 20,
      margin: 0
    }
  }, "Who's going"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--fg-3)'
    }
  }, hike.goingCount, " buddies")), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 16,
      overflowX: 'auto',
      paddingBottom: 4
    }
  }, hike.buddies.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initial: b.initial,
    size: 52,
    presence: b.presence
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      marginTop: 6
    }
  }, b.name))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      border: '1.5px dashed var(--stone-400)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--fg-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-round-plus",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--fg-3)',
      marginTop: 6
    }
  }, "Invite"))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 11,
      marginTop: 22,
      background: 'var(--pine-50)',
      border: '1px solid var(--pine-100)',
      borderRadius: 16,
      padding: '14px 15px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 22,
    style: {
      color: 'var(--pine-600)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--pine-700)'
    }
  }, "When you join, you can share your live route with a trusted contact. We'll check you in when you finish."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '14px 20px 24px',
      background: 'linear-gradient(to top, var(--bg-canvas) 70%, transparent)',
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    style: {
      padding: 14,
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 20
  })), /*#__PURE__*/React.createElement(Button, {
    variant: joined ? 'secondary' : 'primary',
    block: true,
    icon: joined ? 'check' : 'compass',
    onClick: onJoin
  }, joined ? "You're in — see safety setup" : 'Join this hike')));
}
Object.assign(window, {
  HikeDetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/screens-detail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/screens-discover.jsx
try { (() => {
/* Adventure Buddy — Discover screen + HikeCard */

function HikeCard({
  hike,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginBottom: 16
    },
    onClick: () => onOpen(hike)
  }, /*#__PURE__*/React.createElement(Photo, {
    src: hike.photo,
    gradient: SCENES[hike.scene],
    height: 150,
    icon: hike.icon || 'mountain-snow',
    protect: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.92)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 17,
    style: {
      color: hike.saved ? 'var(--clay-500)' : 'var(--fg-3)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      bottom: 12,
      fontSize: 12,
      fontWeight: 600,
      color: '#fff',
      background: 'rgba(255,255,255,.2)',
      backdropFilter: 'blur(8px)',
      padding: '5px 11px',
      borderRadius: 999
    }
  }, hike.when)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '15px 16px 16px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "h-display",
    style: {
      fontSize: 20,
      margin: 0
    }
  }, hike.name), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 4,
      color: 'var(--fg-3)',
      fontSize: 13,
      margin: '3px 0 11px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 13
  }), hike.location), /*#__PURE__*/React.createElement("div", {
    className: "row stat",
    style: {
      fontSize: 12.5,
      color: 'var(--fg-2)'
    }
  }, hike.distance, /*#__PURE__*/React.createElement(Sep, null), hike.gain, /*#__PURE__*/React.createElement(Sep, null), hike.time, /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    kind: hike.level.kind
  }, hike.level.label))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: 14,
      paddingTop: 13,
      borderTop: '1px solid var(--border-subtle)',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(AvatarStack, {
    people: hike.going,
    extra: hike.extra
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--fg-3)',
      marginLeft: 8
    }
  }, hike.goingCount, " going")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    style: {
      padding: '8px 16px',
      fontSize: 14
    },
    onClick: e => {
      e.stopPropagation();
      onOpen(hike);
    }
  }, "Join"))));
}
function Sep() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--stone-400)',
      margin: '0 8px'
    }
  }, "\xB7");
}
const FILTERS = ['Near me', 'This weekend', 'Easy pace', 'Sunrise', 'Dog-friendly'];
function DiscoverScreen({
  hikes,
  onOpen
}) {
  const [active, setActive] = React.useState(['Near me']);
  const toggle = f => setActive(a => a.includes(f) ? a.filter(x => x !== f) : [...a, f]);
  const featured = hikes[0];
  return /*#__PURE__*/React.createElement("div", {
    className: "screen-scroll screen-enter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section",
    style: {
      paddingTop: 8,
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--fg-3)'
    }
  }, "Good morning, Maya"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      fontSize: 27,
      margin: '2px 0 0'
    }
  }, "Where to next?")), /*#__PURE__*/React.createElement(Avatar, {
    initial: "M",
    size: 44,
    presence: "online"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 9,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      flex: 1,
      gap: 9,
      background: 'var(--bg-sunken)',
      borderRadius: 14,
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18,
    style: {
      color: 'var(--fg-3)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-3)',
      fontSize: 15
    }
  }, "Search trails & buddies")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    style: {
      padding: 13,
      borderRadius: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sliders-horizontal",
    size: 18
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      padding: '14px 20px 4px'
    }
  }, FILTERS.map(f => /*#__PURE__*/React.createElement(Chip, {
    key: f,
    active: active.includes(f),
    icon: active.includes(f) ? 'check' : undefined,
    onClick: () => toggle(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    className: "section",
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 10
    }
  }, "Featured this week"), /*#__PURE__*/React.createElement("div", {
    className: "card",
    onClick: () => onOpen(featured)
  }, /*#__PURE__*/React.createElement(Photo, {
    src: featured.photo,
    gradient: SCENES.dawn,
    height: 196,
    icon: "sunrise",
    protect: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 18,
      right: 18,
      bottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: '#fff',
      opacity: .85
    }
  }, "Sat \xB7 sunrise"), /*#__PURE__*/React.createElement("h3", {
    className: "h-display",
    style: {
      fontSize: 25,
      color: '#fff',
      margin: '3px 0 0'
    }
  }, featured.name), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 4,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(AvatarStack, {
    people: featured.going,
    extra: featured.extra,
    size: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: '#fff',
      marginLeft: 10,
      fontWeight: 500
    }
  }, featured.goingCount, " buddies going")))))), /*#__PURE__*/React.createElement("div", {
    className: "section",
    style: {
      marginTop: 22,
      paddingBottom: 110
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-display",
    style: {
      fontSize: 22,
      margin: 0
    }
  }, "Hikes near you"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--lavender-600)'
    }
  }, "See all")), hikes.slice(1).map(h => /*#__PURE__*/React.createElement(HikeCard, {
    key: h.id,
    hike: h,
    onOpen: onOpen
  }))));
}
Object.assign(window, {
  DiscoverScreen,
  HikeCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/screens-discover.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/screens-safety.jsx
try { (() => {
/* Adventure Buddy — Trail check-in / safety sheet (slides up over a screen) */

function SafetySheet({
  hike,
  onClose
}) {
  const [share, setShare] = React.useState(true);
  const [contacts, setContacts] = React.useState(['M']);
  const [done, setDone] = React.useState(false);
  const all = [{
    i: 'M',
    n: 'Maya R.'
  }, {
    i: 'J',
    n: 'Jonah K.'
  }, {
    i: 'A',
    n: 'Amara T.'
  }, {
    i: 'L',
    n: 'Mum'
  }];
  const toggleC = i => setContacts(c => c.includes(i) ? c.filter(x => x !== i) : [...c, i]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(26,43,34,.4)',
      backdropFilter: 'blur(2px)',
      animation: 'fadeIn .24s ease'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      background: 'var(--bg-surface)',
      borderRadius: '32px 32px 0 0',
      padding: '12px 22px 30px',
      boxShadow: 'var(--shadow-xl)',
      animation: 'sheetUp .42s cubic-bezier(0.16,1,0.3,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 5,
      borderRadius: 999,
      background: 'var(--stone-300)',
      margin: '0 auto 18px'
    }
  }), !done ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: 16,
      background: 'var(--pine-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 28,
    style: {
      color: 'var(--pine-600)'
    }
  })), /*#__PURE__*/React.createElement("h2", {
    className: "h-display",
    style: {
      fontSize: 25,
      margin: 0
    }
  }, "Set up your trail check-in"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: 'var(--fg-2)',
      margin: '7px 0 0',
      lineHeight: 1.5
    }
  }, "You're going to ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--fg-1)'
    }
  }, hike.name), ". Share your route with someone you trust \u2014 just in case."), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'space-between',
      marginTop: 22,
      padding: '14px 16px',
      background: 'var(--bg-sunken)',
      borderRadius: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 11
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "route",
    size: 20,
    style: {
      color: 'var(--pine-600)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 600
    }
  }, "Share live route"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--fg-3)'
    }
  }, "Visible only to your contacts"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShare(s => !s),
    style: {
      width: 46,
      height: 28,
      borderRadius: 999,
      border: 0,
      position: 'relative',
      cursor: 'pointer',
      background: share ? 'var(--pine-500)' : 'var(--stone-300)',
      transition: 'background .24s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: share ? 21 : 3,
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left .24s cubic-bezier(0.32,0.72,0.24,1)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--fg-2)',
      margin: '20px 0 12px'
    }
  }, "Trusted contacts"), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 16
    }
  }, all.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.i,
    onClick: () => toggleC(c.i),
    style: {
      border: 0,
      background: 'none',
      textAlign: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initial: c.i,
    size: 50,
    style: {
      opacity: contacts.includes(c.i) ? 1 : .45,
      outline: contacts.includes(c.i) ? '2.5px solid var(--pine-500)' : 'none',
      outlineOffset: 2
    }
  }), contacts.includes(c.i) && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: -2,
      right: -2,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--pine-500)',
      border: '2.5px solid var(--bg-surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 11,
    stroke: 3,
    style: {
      color: '#fff'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--fg-2)',
      marginTop: 7
    }
  }, c.n)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    icon: "check",
    onClick: () => setDone(true)
  }, "Confirm & join"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-block",
    style: {
      marginTop: 6
    },
    onClick: onClose
  }, "Skip for now"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '14px 0 6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: '50%',
      background: 'var(--pine-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 18px',
      animation: 'sheetUp .42s cubic-bezier(0.16,1,0.3,1)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "party-popper",
    size: 34,
    style: {
      color: 'var(--pine-600)'
    }
  })), /*#__PURE__*/React.createElement("h2", {
    className: "h-display",
    style: {
      fontSize: 26,
      margin: 0
    }
  }, "You're all set!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: 'var(--fg-2)',
      margin: '8px auto 0',
      lineHeight: 1.5,
      maxWidth: 280
    }
  }, "See you on the trail. We'll share your route with ", contacts.length, " ", contacts.length === 1 ? 'buddy' : 'buddies', " and check you in when you finish."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    icon: "message-circle",
    onClick: onClose
  }, "Say hi to the group")))));
}
Object.assign(window, {
  SafetySheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/screens-safety.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/screens-social.jsx
try { (() => {
/* Adventure Buddy — Buddies & Chats screens */

function BuddyRow({
  b,
  onWave,
  waved
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 15,
      marginBottom: 12,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 13
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initial: b.initial,
    size: 52,
    presence: b.presence,
    verified: b.verified
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, b.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--fg-3)'
    }
  }, "\xB7 ", b.distance)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--fg-2)',
      marginTop: 2
    }
  }, b.bio))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 7,
      marginTop: 12,
      flexWrap: 'wrap'
    }
  }, b.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--fg-2)',
      background: 'var(--stone-100)',
      borderRadius: 999,
      padding: '5px 11px'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 10,
      marginTop: 13
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: waved ? 'secondary' : 'accent',
    block: true,
    icon: waved ? 'check' : 'hand',
    onClick: onWave
  }, waved ? 'Wave sent' : 'Send a wave'), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    style: {
      padding: 13,
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 19
  }))));
}
function BuddiesScreen({
  buddies
}) {
  const [waved, setWaved] = React.useState({});
  return /*#__PURE__*/React.createElement("div", {
    className: "screen-scroll screen-enter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section",
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      fontSize: 27,
      margin: 0
    }
  }, "Find your people"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--fg-2)',
      margin: '6px 0 0',
      lineHeight: 1.5
    }
  }, "Hikers near you who match your pace and the trails you love. Say hello \u2014 no pressure.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      padding: '16px 20px 4px'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    active: true,
    icon: "check"
  }, "Your pace"), /*#__PURE__*/React.createElement(Chip, null, "New to hiking"), /*#__PURE__*/React.createElement(Chip, null, "Sunrise crew"), /*#__PURE__*/React.createElement(Chip, null, "Dog parents")), /*#__PURE__*/React.createElement("div", {
    className: "section",
    style: {
      marginTop: 12,
      paddingBottom: 110
    }
  }, buddies.map(b => /*#__PURE__*/React.createElement(BuddyRow, {
    key: b.id,
    b: b,
    waved: waved[b.id],
    onWave: () => setWaved(w => ({
      ...w,
      [b.id]: true
    }))
  }))));
}
function ChatsScreen({
  threads,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "screen-scroll screen-enter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section",
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      fontSize: 27,
      margin: 0
    }
  }, "Chats")), /*#__PURE__*/React.createElement("div", {
    className: "section",
    style: {
      marginTop: 14,
      paddingBottom: 110
    }
  }, threads.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "row",
    style: {
      gap: 13,
      padding: '13px 4px',
      borderBottom: '1px solid var(--border-subtle)',
      cursor: 'pointer'
    },
    onClick: () => onOpen(t)
  }, /*#__PURE__*/React.createElement(Avatar, {
    initial: t.initial,
    size: 50,
    presence: t.presence
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15.5,
      fontWeight: 600
    }
  }, t.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: 'var(--fg-3)'
    }
  }, t.time)), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'space-between',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: t.unread ? 'var(--fg-1)' : 'var(--fg-3)',
      fontWeight: t.unread ? 600 : 400,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: 230
    }
  }, t.last), t.unread > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--pine-500)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      borderRadius: 999,
      minWidth: 18,
      height: 18,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 5px'
    }
  }, t.unread)))))));
}
function ThreadScreen({
  thread,
  onBack
}) {
  const [msgs, setMsgs] = React.useState(thread.messages);
  const [draft, setDraft] = React.useState('');
  const endRef = React.useRef(null);
  React.useEffect(() => {
    if (endRef.current) endRef.current.scrollTop = endRef.current.scrollHeight;
  }, [msgs]);
  const send = () => {
    if (!draft.trim()) return;
    setMsgs(m => [...m, {
      me: true,
      text: draft
    }]);
    setDraft('');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "screen-enter",
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 11,
      padding: '60px 16px 12px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--bg-surface)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      border: 0,
      background: 'none',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 22,
    style: {
      color: 'var(--fg-1)'
    }
  })), /*#__PURE__*/React.createElement(Avatar, {
    initial: thread.initial,
    size: 38,
    presence: thread.presence
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600
    }
  }, thread.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--pine-600)'
    }
  }, "online now"))), /*#__PURE__*/React.createElement("div", {
    ref: endRef,
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '18px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      alignSelf: m.me ? 'flex-end' : 'flex-start',
      maxWidth: '76%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      borderRadius: 18,
      fontSize: 14.5,
      lineHeight: 1.4,
      background: m.me ? 'var(--pine-500)' : 'var(--bg-surface)',
      color: m.me ? '#fff' : 'var(--fg-1)',
      borderBottomRightRadius: m.me ? 5 : 18,
      borderBottomLeftRadius: m.me ? 18 : 5,
      boxShadow: 'var(--shadow-xs)'
    }
  }, m.text)))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 10,
      padding: '12px 16px 26px',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--bg-surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      flex: 1,
      gap: 8,
      background: 'var(--bg-sunken)',
      borderRadius: 999,
      padding: '11px 16px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    onKeyDown: e => e.key === 'Enter' && send(),
    placeholder: "Message",
    style: {
      border: 0,
      background: 'none',
      outline: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      width: '100%',
      color: 'var(--fg-1)'
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    style: {
      padding: 12,
      borderRadius: 999
    },
    onClick: send
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up",
    size: 20
  }))));
}
Object.assign(window, {
  BuddiesScreen,
  ChatsScreen,
  ThreadScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/screens-social.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/app.jsx
try { (() => {
/* Adventure Buddy — Web kit app */
function Site() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(ValueProps, null), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(FeaturedHikes, null), /*#__PURE__*/React.createElement(SafetyBand, null), /*#__PURE__*/React.createElement(Testimonial, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Site, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/parts.jsx
try { (() => {
/* Adventure Buddy — Web kit: Icon, Nav, Hero, ValueProps, HowItWorks */

function Icon({
  name,
  size = 20,
  stroke = 1.75,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          'stroke-width': stroke
        }
      });
      const svg = ref.current.querySelector('svg');
      if (svg) {
        svg.style.width = size + 'px';
        svg.style.height = size + 'px';
      }
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  });
}
const AV = {
  M: 'var(--pine-400)',
  J: 'var(--lavender-400)',
  A: 'var(--honey-400)',
  R: 'var(--sage-500)',
  S: 'var(--clay-500)',
  N: 'var(--stone-500)'
};
function Av({
  i,
  size = 36
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "avatar-sm",
    style: {
      width: size,
      height: size,
      fontSize: size * 0.38,
      background: AV[i] || 'var(--pine-400)'
    }
  }, i);
}
function Nav() {
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap nav-inner"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal.svg",
    height: "34",
    alt: "Adventure Buddy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#how"
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    href: "#hikes"
  }, "Featured hikes"), /*#__PURE__*/React.createElement("a", {
    href: "#safety"
  }, "Safety"), /*#__PURE__*/React.createElement("a", {
    href: "#community"
  }, "Community")), /*#__PURE__*/React.createElement("div", {
    className: "nav-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-ghost"
  }, "Log in"), /*#__PURE__*/React.createElement("a", {
    href: "#cta",
    className: "btn btn-primary"
  }, "Get started"))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-photo",
    style: {
      backgroundImage: "url('../../assets/photos/mountain-panorama.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Adventure is better together"), /*#__PURE__*/React.createElement("h1", {
    className: "disp"
  }, "Find your people outside."), /*#__PURE__*/React.createElement("p", null, "Meet trail buddies who hike at your pace, plan adventures together, and make the outdoors feel a little less lonely \u2014 safely."), /*#__PURE__*/React.createElement("div", {
    className: "hero-actions"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#cta",
    className: "btn btn-light"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "compass",
    size: 19
  }), "Find a hike near you"), /*#__PURE__*/React.createElement("a", {
    href: "#how",
    className: "btn btn-ghost",
    style: {
      color: '#fff',
      border: '1px solid rgba(255,255,255,.4)'
    }
  }, "How it works")), /*#__PURE__*/React.createElement("div", {
    className: "hero-trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "avs"
  }, /*#__PURE__*/React.createElement(Av, {
    i: "M"
  }), /*#__PURE__*/React.createElement(Av, {
    i: "A"
  }), /*#__PURE__*/React.createElement(Av, {
    i: "J"
  }), /*#__PURE__*/React.createElement(Av, {
    i: "R"
  })), /*#__PURE__*/React.createElement("span", null, "Joined by 60,000+ hikers across 40 trails near you")))));
}
const PROPS = [{
  icon: 'users-round',
  bg: 'var(--pine-100)',
  fg: 'var(--pine-600)',
  t: 'Buddies at your pace',
  d: 'Match with hikers nearby who share your speed, your trails, and your idea of a good morning. No pressure, no swiping.'
}, {
  icon: 'map',
  bg: 'var(--lavender-100)',
  fg: 'var(--lavender-600)',
  t: 'Plan it together',
  d: 'From a sunrise walk to a weekend backpacking trip — pick a trail, set a time, and bring a crew along in a few taps.'
}, {
  icon: 'shield-check',
  bg: 'var(--honey-100)',
  fg: 'var(--honey-500)',
  t: 'Safe by design',
  d: 'Share your live route with trusted contacts and check in automatically when you finish. Adventure with peace of mind.'
}];
function ValueProps() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "community"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Why Adventure Buddy"), /*#__PURE__*/React.createElement("h2", {
    className: "disp"
  }, "A warmer way to get outside"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "We built Adventure Buddy for the quiet joy of good company on a good trail \u2014 not for streaks, scores, or strangers.")), /*#__PURE__*/React.createElement("div", {
    className: "props"
  }, PROPS.map(p => /*#__PURE__*/React.createElement("div", {
    className: "prop",
    key: p.t
  }, /*#__PURE__*/React.createElement("div", {
    className: "ic",
    style: {
      background: p.bg
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 26,
    style: {
      color: p.fg
    }
  })), /*#__PURE__*/React.createElement("h3", null, p.t), /*#__PURE__*/React.createElement("p", null, p.d))))));
}
const STEPS = [{
  n: '01',
  t: 'Tell us your pace',
  d: 'Share the trails you love and how you like to hike. Takes about a minute.'
}, {
  n: '02',
  t: 'Meet your buddies',
  d: 'We introduce you to hikers nearby who fit. Send a wave to say hello.'
}, {
  n: '03',
  t: 'Head out, safely',
  d: 'Plan a hike, share your route with a trusted contact, and enjoy the trail.'
}];
function HowItWorks() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "how",
    style: {
      background: 'var(--bg-surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    className: "disp"
  }, "Three steps to the trailhead")), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "line"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "disp"
  }, s.t), /*#__PURE__*/React.createElement("p", null, s.d))))));
}
Object.assign(window, {
  Icon,
  Av,
  Nav,
  Hero,
  ValueProps,
  HowItWorks
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/parts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/parts2.jsx
try { (() => {
/* Adventure Buddy — Web kit: FeaturedHikes, SafetyBand, Testimonial, CTA, Footer */

const HIKES = [{
  name: 'Aspen ridge trail',
  loc: 'Wasatch Range, UT',
  when: 'Sat · sunrise',
  dist: '4.2 mi',
  gain: '380 m',
  time: '~2 hr',
  level: ['mod', 'Moderate'],
  photo: '../../assets/photos/aspen-trail.jpg'
}, {
  name: 'Meadow walk',
  loc: 'Boise Foothills, ID',
  when: 'Sun morning',
  dist: '2.8 mi',
  gain: '120 m',
  time: '~1.5 hr',
  level: ['easy', 'Easy'],
  photo: '../../assets/photos/meadow-trail.jpg'
}, {
  name: 'Alpine lake loop',
  loc: 'Wasatch Range, UT',
  when: 'Next Sat',
  dist: '3.1 mi',
  gain: '90 m',
  time: '~1.5 hr',
  level: ['easy', 'Easy'],
  photo: '../../assets/photos/lake-dog.jpg'
}];
function FeaturedHikes() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "hikes"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      maxWidth: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Happening near you"), /*#__PURE__*/React.createElement("h2", {
    className: "disp"
  }, "Hikes looking for buddies")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-secondary"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map",
    size: 18
  }), "Browse all trails")), /*#__PURE__*/React.createElement("div", {
    className: "hikes-grid"
  }, HIKES.map(h => /*#__PURE__*/React.createElement("div", {
    className: "hike",
    key: h.name
  }, /*#__PURE__*/React.createElement("div", {
    className: "hike-photo",
    style: {
      backgroundImage: `url(${h.photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "protect"
  }), /*#__PURE__*/React.createElement("span", {
    className: "when"
  }, h.when)), /*#__PURE__*/React.createElement("div", {
    className: "hike-body"
  }, /*#__PURE__*/React.createElement("h3", null, h.name), /*#__PURE__*/React.createElement("div", {
    className: "hike-loc"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14
  }), h.loc), /*#__PURE__*/React.createElement("div", {
    className: "hike-stats stat"
  }, h.dist, /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "\xB7"), h.gain, /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "\xB7"), h.time, /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: `tag tag-${h.level[0]}`
  }, h.level[1]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 16,
      paddingTop: 14,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, ['M', 'J', 'A'].map((i, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      marginLeft: k ? -8 : 0
    }
  }, /*#__PURE__*/React.createElement(Av, {
    i: i,
    size: 26
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--fg-3)',
      marginLeft: 10
    }
  }, "going")), /*#__PURE__*/React.createElement("a", {
    href: "#cta",
    className: "btn btn-primary",
    style: {
      padding: '8px 16px',
      fontSize: 14
    }
  }, "Join"))))))));
}
const CHECKS = ['Share your live route with trusted contacts', 'Automatic check-in when you finish your hike', 'Verified profiles and a kind, moderated community'];
function SafetyBand() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "safety"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band-inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--sage-300)'
    }
  }, "Safe by design"), /*#__PURE__*/React.createElement("h2", {
    className: "disp"
  }, "Adventure with peace of mind"), /*#__PURE__*/React.createElement("p", null, "Getting outside with someone new should feel good \u2014 and safe. Adventure Buddy is built so you can explore freely while the people who care about you can follow along."), /*#__PURE__*/React.createElement("div", {
    className: "checks"
  }, CHECKS.map(c => /*#__PURE__*/React.createElement("div", {
    className: "check",
    key: c
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle-2",
    size: 22
  }), c)))), /*#__PURE__*/React.createElement("div", {
    className: "visual"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band-card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: 'var(--pine-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 22,
    style: {
      color: 'var(--pine-600)'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: 'var(--fg-1)'
    }
  }, "Trail check-in"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--fg-3)'
    }
  }, "Sharing with Maya \xB7 2 contacts"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.5,
      color: 'var(--fg-2)',
      margin: 0
    }
  }, "You're on Cascade Pass. We'll let your buddies know when you finish."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      height: 6,
      borderRadius: 999,
      background: 'var(--stone-200)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '68%',
      height: '100%',
      background: 'var(--pine-500)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "btn btn-primary",
    style: {
      width: '100%',
      marginTop: 14,
      fontSize: 14.5
    }
  }, "I'm back safe")))))));
}
function Testimonial() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg-surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quote"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "quote",
    size: 36,
    style: {
      color: 'var(--lavender-400)',
      justifyContent: 'center',
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "q"
  }, "I moved to a new city not knowing a soul. Six months later, my Sunday sunrise crew feels like family \u2014 and it started with one nervous wave."), /*#__PURE__*/React.createElement("div", {
    className: "by"
  }, /*#__PURE__*/React.createElement(Av, {
    i: "A",
    size: 44
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, "Amara T."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--fg-3)'
    }
  }, "Hiking in Portland, OR"))))));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Your next trail is out there"), /*#__PURE__*/React.createElement("h2", {
    className: "disp"
  }, "Adventure is better together."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Find a buddy, plan a hike, and head outside this weekend. It's free to start."), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-primary"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "compass",
    size: 19
  }), "Get started free"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-secondary"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "smartphone",
    size: 18
  }), "Get the app")))));
}
const FOOT = {
  Product: ['Find buddies', 'Featured hikes', 'Plan a trip', 'The app'],
  Company: ['About us', 'Community', 'Careers', 'Blog'],
  Support: ['Safety center', 'Guidelines', 'Help', 'Contact']
};
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal.svg",
    height: "32",
    alt: "Adventure Buddy"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--fg-2)',
      lineHeight: 1.6,
      margin: '16px 0 0',
      maxWidth: 280
    }
  }, "A warm place to find trail buddies and get outside, together.")), Object.entries(FOOT).map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("h4", null, h), /*#__PURE__*/React.createElement("ul", null, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Adventure Buddy"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--fg-3)'
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--fg-3)'
    }
  }, "Terms")))));
}
Object.assign(window, {
  FeaturedHikes,
  SafetyBand,
  Testimonial,
  CTA,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/parts2.jsx", error: String((e && e.message) || e) }); }

})();
