const events = [
    {
        date: 1930,
        event: "Chinua Achebe is born in Ogidi, Anambra State, Nigeria Protectorate."
    },
    {
        date: 1936,
        event: "Attends St. Philips' Central School. Spent a week in religious classes for young children but was quickly moved to a higher class when the school's chaplain took note of his intelligence. Supposedly Achebe had the best reading and handwriting skills."
    },
    {
        date: 1948,
        event: "Attended Nigeria's first University. Now known as the University of Ibadan. Achebe obtained such high marks in the entrance examination that he was admitted as a Major Scholar in the university's first intake and given a bursary to study medicine. After a year of that, he switched to English, history, and theology."
    },
    {
        date: 1958,
        event: "Achebe's Things Fall Apart is published by William Heinemann Ltd. in the United Kingdom. C.W. Barton was the cover artist of the first edition."
    },
    {
        date: 1960,
        event: "No Longer At Ease is published. About a civil servant who is embroiled in the corruption of Lagos. Achebe reflects on the challenges a new generation had to face on the threshold of Nigerian independence."
    },
    {
        date: 1964,
        event: "Arrow of God published. The third book in the trilogy, it explores the interesection of Igbo tradition and European Christianity."
    },
    {
        date: 1966,
        event: "A Man of the People is published. A satire set in an unnamed African state which has just attained independence. Friend of Achebe called him a \"prophet\" since many things in the novel came true- except for a military coup, which happend shortly after the novel was published."
    },
    {
        date: 1975,
        event: "Achebe delivers the Chancellor's Lecture at Amherst. An Image of Africa: Racism in Conrad's \"Heart of Darkness\". Decried Joseph Conrad as a racist. Achebe insinuated that Conrad dehumanizes Africans by having Europeans wandering into Africa at their own peril, as if it were a land of absolute danger and monsters."
    },
    {
        date: 1987,
        event: "Anthills of the Savannah. A novel about a military coup in a fictional West African nation called Kangan. It was a finalist for the Man Booker Prize, but lost to Penelope Lively's \"Moon Tiger\"."
    },{
        date: 1990,
        event: "Car accident. Achebe was riding in a car to Lagos when an axle collapsed and the car flipped. His son Ikechukwu and the driver suffered minor injuries, but the weight of the vehicle fell on Achebe and his spine was severely damaged. He was flown to the Paddocks Hospital in Buckinghamshire, England, and treated for his injuries. In July doctors announced that although he was recuperating well, he was paralyzed from the waist down and would require the use of a wheelchair for the rest of his life."
    },{
        date: 2009,
        event: "Things Fall Apart is reprinted in the 50th anniversary edition."
    },{
        date: 2013,
        event: "Chinua Achebe dies at the age of 82 and is buried in his hometown, Ogidi, Nigeria."
    },

];

const divEvents = document.getElementById('timeline');

events.map(event => {
    divEvents.innerHTML += `<p><b>. ${event.date} - </b> ${event.event}</p>`;
});

divEvents.innerHTML += `<br /><p><i>"There was a writer named Chinua Achebe, in whose company the prison walls fell down"<br /> -Nelson Mandela.</i></p>`;

