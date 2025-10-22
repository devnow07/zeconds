'use strict';

let mainData = [
    {id: 'foundations-99001', name: 'Logic (&F)', imgPath: "assets/icons-fields/foundations.svg", isSelected: true},
    // {id: 'discrete_mathematics-99001', name: 'Discrete Mathematics', imgPath: "assets/icons-fields/discrete_mathematics.svg", isSelected: true},
    {id: 'python-22014', name: 'Python', imgPath: "assets/icons-fields/python.svg", isSelected: true},
    {id: 'firebase-09943', name: 'Web Development', imgPath: "assets/icons-fields/firebase.svg", isSelected: true},
    // {id: 'algorithms-12345', name: 'Algorithms', imgPath: "assets/icons-fields/algorithms.svg"},
    // {id: 'java-22231', name: 'Java', imgPath: "assets/icons-fields/java.jpg", isSelected: true},
    {id: 'databases-22231', name: 'Databases', imgPath: "assets/icons-fields/databases.svg", isSelected: true},
    // {id: 'probability-20802', name: 'Statistics', imgPath: "assets/icons-fields/statistics.svg"},
    // {id: 'backend-54321', name: 'Backend', imgPath: "assets/icons-fields/backend.svg"},
    {id: 'maths-22231', name: 'Mathematics', imgPath: "assets/icons-fields/mathematics.svg", isSelected: true},
    {id: 'computing-22231', name: 'Computing', imgPath: "assets/icons-fields/computing.svg", isSelected: true},
    // {id: 'ee-99123',name: 'Electromagentism (&E)', imgPath: "assets/icons-fields/stem.svg", specific: false},
    {id: 'marketing-88231', name: 'Marketing Books', imgPath: "assets/icons-fields/marketing-2.svg", isSelected: true},
    {id: 'marketing-88232', name: 'Marketing An.', imgPath: "assets/icons-fields/marketing.svg", isSelected: true},
    {id: 'english-87654', name: 'English', imgPath: "assets/icons-fields/languages.svg", specific: false},
    {id: 'omikron-65432', name: 'Omikron', imgPath: "assets/icons-fields/omikron.svg", specific: false},
    {id: 'insikt-54321', name: 'Insikt', imgPath: "assets/icons-fields/insikt.svg", specific: false},
    {id: 'virtuell-00001',name: 'Virtuell', imgPath: "assets/icons-fields/virtuell2.svg", insikt: false},
    {id: 'sjalv-00002',name: 'Själv', imgPath: "assets/icons-fields/sjalv.svg", isSelected: true, insikt: false},
    {id: 'iron-00000',name: 'Iron', imgPath: "assets/icons-fields/airon.svg", insikt: false},
    {id: 'stability-20000',name: 'Movement', imgPath: "assets/icons-fields/stability.svg", insikt: false},
    // {id: 'rope_skipping-03000',name: 'Aerobics', imgPath: "assets/icons-fields/rope_skipping.svg"},
    {id: 'kapital-10000',name: 'Kapital', imgPath: "assets/icons-fields/sseus.svg"},
    // {id: 'mobility-00200',name: 'Mobility', imgPath: "assets/icons-fields/mobility.svg"},
    // {id: 'mobility_(ov)-00201',name: 'Mob-Flex-Stab (Ov)', imgPath: "assets/icons-fields/mobility_(ov).svg", overlapping: true},
    {id: 'sheet_music_reading-01300',name: 'Music (Main)', imgPath: "assets/icons-fields/sheet_music_reading.svg"},
    {id: 'music_development-01301',name: 'Music (General)', imgPath: "assets/icons-fields/music_development.svg"},
    // {id: 'free_reading-00112',name: 'Free Reading', imgPath: "assets/icons-fields/free_reading.svg"},
    {id: 'decoded-63244',name: 'Decoded', imgPath: "assets/icons-fields/decoded.svg"},
    {id: 'decoded-63245',name: 'Decoded (Gen.)', imgPath: "assets/icons-fields/decoded_2.svg"},
    {id: 'decoded-63246',name: 'Decoded (Osman)', imgPath: "assets/icons-fields/decoded_osman.svg"},
    {id: 'design-11211',name: 'Design', imgPath: "assets/icons-fields/ux_design.svg"},
    // {id: 'ulp_(ov)-09222', name: 'ULP (Ov)', imgPath: "assets/icons-fields/ulp.png", overlapping: true},
    {id: 'fortnite-13345', name: 'Fortnite', imgPath: "assets/icons-fields/fortnite.png", rank: 1},
    {id: 'fortnite-13346', name: 'Fortnite Training', imgPath: "assets/icons-fields/fortnite-training.png", rank: 1},
    {id: 'entertainment', name: 'TV & Movies', imgPath: "assets/icons-fields/tv.svg", isSelected: true},
    {id: 'gaming-01234', name: 'Gaming', imgPath: "assets/icons-fields/gaming.svg", isSelected: true},
    // {id: 'common-99999', name: '_', imgPath: "assets/icons-fields/generic-1.svg", isSelected: true},
    // {id: 'common-99998', name: '_', imgPath: "assets/icons-fields/generic-2.svg", isSelected: true},
    // {id: 'decoded_(ov)-09932', name: 'Decoded (Ov)', imgPath: "assets/icons-fields/decoded_(ov).svg", rank: 1, overlapping: true},
    // {id: 'thefinals-12345', name: 'The Finals', imgPath: "assets/icons-fields/the-finals.jpg", isSelected: true},
    // {id: 'ux_design-11239', name: 'Design', imgPath: "assets/icons-fields/ux_design.svg"},
    // {id: 'seo-87714', name: 'SEO', imgPath: "assets/icons-fields/seo.svg"},
    // {id: 'bemms-46654', name: '∴Alpha∴', imgPath: "assets/icons-fields/bemms.svg", specific: false},
    {id: 'hushall-00012',name: 'Hushåll', imgPath: "assets/icons-fields/hushall.svg"},
    // {id: 'lithium-19932', name: 'Lithium', imgPath: "assets/icons-fields/lithium.svg", rank: 1},
    // {id: 'lithium_(ov)-29932', name: 'Lithium (Ov)', imgPath: "assets/icons-fields/lithium-(ov).svg", rank: 1, overlapping: true},
]

mainData = mainData.map((obj, index) => {

    // Standarizing

    obj.n = index;
    if(!obj.initialMs) obj.initialMs = 0;
    if(!obj.rank) obj.rank = 0;
    if(obj.isSelected === undefined) obj.isSelected = false;

    // Loading LocalStorage

    const savedData = JSON.parse(localStorage.getItem(`stopwatch_${obj.id}`));
    if(savedData) {
        return obj = {...obj, ...savedData};
    } return obj
})

// localStorage.clear();

// localStorage.setItem('0', JSON.stringify({id: mainData[0]}))
// console.log(JSON.parse(localStorage.getItem('0')));

// From local storage
//      * initialMs
//      * rank
//      * isSelected

// localStorage.setItem('stopwatch_javascript-23014', JSON.stringify({initialMs: 250000, rank: 1, isSelected: true}))




