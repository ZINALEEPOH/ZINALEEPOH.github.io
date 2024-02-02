$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['section1', 'section2', 'section3'],
        autoScrolling: true,
        fitToSection: true,
        scrollOverflow: false,
        navigation: true,
    });

    $('.nav-link').click(function () {
        $('#navbarNav').removeClass('show');
    });

    const booksData = [
        {
            title: "Piranesi",
            author: "Susanna Clarke",
            cover: "imgs/piranesi.jpg",
            description: "Piranesi’s house is no ordinary building: its rooms are infinite, its corridors endless, its walls are lined with thousands upon thousands of statues, each one different from all the others. Within the labyrinth of halls an ocean is imprisoned; waves thunder up staircases, rooms are flooded in an instant. But Piranesi is not afraid; he understands the tides as he understands the pattern of the labyrinth itself. He lives to explore the house.",
            genre: "Fantasy",
            reviews: "4.23"
        },
        {
            title: "Nausea",
            author: "Jean-Paul Sartre",
            cover: "imgs/nausea.jpg",
            description: "Nausea is the story of Antoine Roquentin, a French writer who is horrified at his own existence. In impressionistic, diary form he ruthlessly catalogues his every feeling and sensation about the world and people around him. His thoughts culminate in a pervasive, overpowering feeling of nausea which spread at the bottom of the viscous puddle, at the bottom of our time, the time of purple suspenders and broken chair seats; it is made of wide, soft instants, spreading at the edge, like an oil stain. Roquentin's efforts to try and come to terms with his life, his philosophical and psychological struggles, give Sartre the opportunity to dramatize the tenets of his Existentialist creed. The introduction for this edition of Nausea by Hayden Carruth gives background on Sartre's life and major works, a summary of the principal themes of Existentialist philosophy, and a critical analysis of the novel itself.",
            genre: "Philosophical Fiction",
            reviews: "3.94"
        },
        {
            title: "The Divine Comedy",
            cover: "imgs/divine.jpg",
            author: "Dante Alighieri",
            genre: "Poetry",
            reviews: "4.08",
            description: "This Everyman’s Library edition–containing in one volume all three cantos, Inferno, Purgatorio, and Paradiso–includes an introduction by Nobel Prize—winning poet Eugenio Montale, a chronology, notes, and a bibliography. Also included are forty-two drawings selected from Botticelli’s marvelous late-fifteenth-century series of illustrations. Translated in this edition by Allen Mandelbaum, The Divine Comedy begins in a shadowed forest on Good Friday in the year 1300. It proceeds on a journey that, in its intense recreation of the depths and the heights of human experience, has become the key with which Western civilization has sought to unlock the mystery of its own identity. Mandelbaum’s astonishingly Dantean translation, which captures so much of the life of the original, renders whole for us the masterpiece of that genius whom our greatest poets have recognized as a central model for all poets."
        },

        {
            title: "Crime and Punishment",
            cover: "imgs/cnp.jpg",
            author: "Fyodor Dostoevsky",
            genre: "Philosophical Fiction",
            reviews: "4.26",
            description: "Raskolnikov, a destitute and desperate former student, wanders through the slums of St Petersburg and commits a random murder without remorse or regret. He imagines himself to be a great man, a Napoleon: acting for a higher purpose beyond conventional moral law. But as he embarks on a dangerous game of cat and mouse with a suspicious police investigator, Raskolnikov is pursued by the growing voice of his conscience and finds the noose of his own guilt tightening around his neck. Only Sonya, a downtrodden sex worker, can offer the chance of redemption."
        },
        {
            title: "The World as Will and Representation, Volume I",
            cover: "imgs/willandrep.jpg",
            author: "Arthur Schopenhauer",
            genre: "Philosophy",
            reviews: "4.21",
            description: "Arthur Schopenhauer's Die Welt als Wille und Vorstellung is one of the most important philosophical works of the nineteenth century, the basic statement of one important stream of post-Kantian thought. It is without question Schopenhauer's greatest work. Conceived and published before the philosopher was 30 and expanded 25 years later, it is the summation of a lifetime of thought. For 70 years, the only unabridged English translation of this work was the Haldane-Kemp collaboration. In 1958, a new translation by E. F. J. Payne appeared that decisively supplanted the older one. Payne's translation is superior because it corrects nearly 1,000 errors and omissions in the Haldane-Kemp translation, and it is based on the definitive 1937 German edition of Schopenhauer's work prepared by Dr. Arthur Hübscher. Payne's edition is the first to translate into English the text's many quotations in half a dozen languages. It is thus the most useful edition for the student or teacher."
        },
        {
            title: "The Myth of Sisyphus and Other Essays",
            cover: "imgs/myth.jpg",
            author: "Albert Camus",
            genre: "Philosophy",
            reviews: "4.22",
            description: "One of the most influential works of this century, this is a crucial exposition of existentialist thought. Influenced by works such as Don Juan, and the novels of Kafka, these essays begin with a meditation on suicide: the question of living or not living in an absurd universe devoid of order or meaning. With lyric eloquence, Camus posits a way out of despair, reaffirming the value of personal existence, and the possibility of life lived with dignity and authenticity."
        },

        {
            title: "Frankenstein: The 1818 Text",
            cover: "imgs/franken.jpg",
            author: "Mary Shelley",
            genre: "Horror",
            reviews: "3.87",
            description: "Mary Shelley's seminal novel of the scientist whose creation becomes a monster. This edition is the original 1818 text, which preserves the hard-hitting and politically charged aspects of Shelley's original writing, as well as her unflinching wit and strong female voice. This edition also includes a new introduction and suggestions for further reading by author and Shelley expert Charlotte Gordon, literary excerpts and reviews selected by Gordon and a chronology and essay by preeminent Shelley scholar Charles E. Robinson."
        },
        {
            title: "A River Dies of Thirst: Journals",
            cover: "imgs/river.jpg",
            author: "Mahmoud Darwish",
            genre: "Poetry",
            reviews: "4.24",
            description: "“There are two maps of Palestine that the politicians will never manage to forfeit: the one kept in the memories of Palestinian refugees, and that which is drawn by Mahmoud Darwish’s poetry.”—Anton Shammas\n\nThis remarkable collection of Mahmoud Darwish’s poems and prose meditations is both lyrical and philosophical, questioning and wise, full of irony and protest and play. “Every beautiful poem is an act of resistance.” As always, Darwish’s musings on unrest and loss dwell on love and humanity; myth and dream are inseparable from truth. “Truth is plain as day.” Throughout the book, Darwish returns frequently to his ongoing and often lighthearted conversation with death.\n\nMahmoud Darwish (1941–2008) was awarded the Lannan Prize for Cultural Freedom in 2001. He was regarded as the voice of the Palestinian people and one of the greatest poets of our time."
        }
    ];


    $('#searchButton').click(function () {
        const searchTerm = $('#searchInput').val().toLowerCase();
        const filteredBooks = booksData.filter(book => book.title.toLowerCase().includes(searchTerm));

        displayBooks(filteredBooks);
    });

    function displayBooks(books) {
        const bookDisplay = $('#bookDisplay');
        bookDisplay.empty();

        books.forEach(book => {
            const bookItem = `
          <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card">
              <img src="${book.cover}" class="card-img-top" alt="${book.title} cover">
              <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">Author: ${book.author}</p>
                <button class="btn btn-primary reserve-button" data-toggle="modal" data-target="#bookModal" data-title="${book.title}" data-description="${book.description}" data-genre="${book.genre}" data-reviews="${book.reviews}">Reserve</button>
              </div>
            </div>
          </div>
        `;

            bookDisplay.append(bookItem);
        });
    }


    $('#bookDisplay').on('click', '.reserve-button', function () {
        const reserveButton = $(this);
        reserveButton.text('Reserved').prop('disabled', true);
    });

    function displayBookDetails(title) {
        const bookData = booksData.find(book => book.title === title);
        if (bookData) {
            const { description, genre, reviews } = bookData;
            $('#bookModalLabel').text(`${title}`);
            $('#bookModalGenre').text(`Genre: ${genre}`);
            $('#bookModalReviews').text(`Rating: ${reviews}`);
            $('#bookModalDescription').text(`${description}`);
            $('#bookModal').modal('show');
        }
    }

    $('#bookDisplay').on('click', '.card', function () {
        const title = $(this).find('.card-title').text();
        displayBookDetails(title);
    });

    displayBooks(booksData);

    const genreData = {
        labels: ['Fiction', 'Mystery', 'Science Fiction', 'Fantasy', 'Romance'],
        datasets: [
            {
                label: 'Popularity',
                backgroundColor: 'rgb(53, 121, 255)',
                borderColor: 'rgb(53, 121, 255)',
                borderWidth: 1,
                data: [30, 22, 18, 15, 25],
            },
        ],
    };

    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: genreData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 5,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const label = context.dataset.label || '';
                            const value = context.parsed.y || 0;
                            return `${label}: ${value}%`;
                        },
                    },
                },
            },
        },
    });

    const inventoryData = [
        { title: "Piranesi", author: "Susanna Clarke", genre: "Fantasy", year: 2020, type: "Hardcover" },
        { title: "Nausea", author: "Jean-Paul Sartre", genre: "Philosophical Fiction", year: 1938, type: "Paperback" },
        { title: "The Divine Comedy", author: "Dante Alighieri", genre: "Poetry", year: 1320, type: "Hardcover" },
        { title: "Crime and Punishment", author: "Fyodor Dostoevsky", genre: "Philosophical Fiction", year: 1866, type: "Paperback" },
        { title: "The World as Will and Representation, Volume I", author: "Arthur Schopenhauer", genre: "Philosophy", year: 1819, type: "Hardcover" },
        { title: "The Myth of Sisyphus and Other Essays", author: "Albert Camus", genre: "Philosophy", year: 1942, type: "Paperback" },
        { title: "Frankenstein: The 1818 Text", author: "Mary Shelley", genre: "Horror", year: 1818, type: "Hardcover" },
        { title: "A River Dies of Thirst: Journals", author: "Mahmoud Darwish", genre: "Poetry", year: 2009, type: "Paperback" }
    ];


    $('#inventoryTable').DataTable({
        data: inventoryData,
        columns: [
            { title: "Title", data: "title" },
            { title: "Author", data: "author" },
            { title: "Genre", data: "genre" },
            { title: "Year", data: "year" },
            { title: "Type", data: "type" }
        ],
        "paging": true,
        "pageLength": 5,
        "lengthChange": false,
    });
});