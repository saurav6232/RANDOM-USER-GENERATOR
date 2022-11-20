const getRandomUser = () => {

    fetch(`https://randomuser.me/api/`)
        .then(res => res.json())
        .then(data => {
            random.innerHTML = data.results.map(item => `
            
                <div class = 'person'>
                
                    <img src = '${item.picture.large}' />
                    <h4>First Name: ${item.name.first}</h4>
                    <h4>Last Name: ${item.name.last}</h4>
                    <h4>Gender: ${item.gender}</h4>
                    <h4>Age: ${item.dob.age}</h4>
                    <h4>City: ${item.location.city}</h4>
                    <h4>Email: ${item.email}</h4>
                
                </div>
            
            `).join('');
        });
}


// Event listeners
btn.addEventListener('click', getRandomUser);
