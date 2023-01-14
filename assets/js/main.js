// Connect to the Node.js server to get the list of songs
fetch('/songs/songs.json')
  .then(response => response.json())
  .then(songs => {
     // Here you can loop through the songs array and add them to the music list.
     const musicList = document.getElementById('music-list');
     songs.forEach(song => {
         const li = document.createElement('li');
         li.innerHTML = `${song.title} by ${song.artist}  <b>Price:</b>${song.price}`;
        // musicList.appendChild(li);
    });
});

    // 
//     const musicList = document.getElementById('music-list');
// 
//     songs.forEach(song => {
//       const li = document.createElement('li');
//       li.innerHTML = song.title;
// 
      // Add a "Buy" button for each song
 //      const button = document.createElement('button');
//       button.innerHTML = 'Buy';
//       button.onclick = () => {
//         // Open the Stripe checkout when the button is clicked
//         // The price of the song is in song.price
//         const stripe = Stripe('your_stripe_api_key');
//         stripe.redirectToCheckout({
//           items: [{sku: song.sku, quantity: 1}],
//           successUrl: `https://example.com/success?song=${song.title}`,
//           cancelUrl: 'https://example.com/cancel',
//         }).then((result) => {
//           if (result.error) {
//             // If there was an error redirect to the cancel page
//             window.location.href = 'https://example.com/cancel';
//           }
//         });
//       };
//       li.appendChild(button);
//       musicList.appendChild(li);
//     });
// });
// 