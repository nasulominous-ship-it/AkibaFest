// music
var tempMusic = '';
var music = document.querySelector('.music');

if (tempMusic) {
    music.src = tempMusic;
}

// door mulai
function mulai() {

    // back to top
    window.scrollTo(0, 0);

    // sound door
    var soundDoor = document.querySelector('.sound-door');
    soundDoor.play();

    // door section
    var doorSection = document.getElementById('door-section');

    // ambil semua pintu
    var doors = document.querySelectorAll('.door');

    doors.forEach(function(door, index) {

        var direction = (index === 0) ? -1 : 1;

        door.style.transform = 'rotateY(' + (70 * direction) + 'deg)';
    });

    //set timeout music
    setTimeout(function () {
        //music play
        music.play()
        doorSection.css('transform', 'scale(6)')
    }, 600)

    // optional: hilangkan door setelah animasi
    setTimeout(function() {
        doorSection.css('opacity, 0')
        $('body').removeClass('overflow-hidden')
        $('body').addClass('transition')
        doorSection.css('display', 'none')
    }, 2000);
}

// button music
var isPlaying = true

function toggleMusic(event) {
    event.preventDeafult()

    const musicButton = document.getElementById('music-button')

    if (isPlaying) {
        musicButton.innerHTML = '<i class="fas fa-fw fa-pause"><?i>'
        musicButton.classList.remove('rotate')
        musicButton.style.transform = 'translateY(0)'
        music.pause()
    } else {
        musicButton.innerHTML = '<i class="fas fa-fw fa-compact-disc"><?i>'
        musicButton.classList.add('rotate')
        music.play()
    }
    isPlaying = !isPlaying
}

//countdown waktu
var countdowntdate = new Date("Jul 22, 2028 15:00:00").getTime()

var x = setInterval(function (){
    var now = new Date().getTime()

    var distance = countdowntdate - now

    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distanceb % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById('countdown-wedding').innerHTML = `
<div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-align"><h5>${days}</h5> Hari</div></div>
<div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-align"><h5>${hours}</h5> Jam</div></div>
<div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-align"><h5>${minutes}</h5> Menit</div></div>
<div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-align"><h5>${seconds}</h5> Detik</div></div>
    `
    if (distance < 0) {
        clearInterval(x)
        document.getElementById('countdown-wedding').innerHTML = "<span class'text-center p-3 rounded text-light m-2><h2>Sudah dimulai</h2></span>"
    }
}, 1000)

//nama sambutan
const urlParams = new URLSearchParams(window)