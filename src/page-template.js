// create the team page
const createTeamPage = (team) => {
    // create the manager card
    const createManagerCard = (manager) => {
      return `
        <div class="card employee-card">
          <div class="card-header">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: ${manager.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
              <li class="list-group-item">Phone: ${manager.phone}</li>
            </ul>
          </div>
        </div>
      `;
    };
    
    // create the html for engineers
    const createEngineerCard = (engineer) => {
      return `
        <div class="card employee-card">
          <div class="card-header">
            <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: ${engineer.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></li>
            </ul>
          </div>
        </div>
      `;
    };
    
    // create the html for interns
    const createInternCard = (intern) => {
      return `
        <div class="card employee-card">
          <div class="card-header">
            <h2 class="card-title">${intern.name}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: ${intern.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
              <li class="list-group-item">School: ${intern.school}</li>
  
          </ul>
          </div>
          
          </div>

      `;
    };
  // Create a map for role and corresponding generating function
  const roleToGenerator = {
  Manager: createManagerCard,
  Engineer: createEngineerCard,
  Intern: createInternCard
  }
  
  // map through team array to create individual cards by role
  const html = team.map(employee => roleToGeneratoremployee.role);
  
  // Return the full html template, joining all employee cards
  return <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <meta http-equiv="X-UA-Compatible" content="ie=edge" /> <title>Team Profile</title> <link rel="stylesheet" href="styles.css"> </head> <body> <div class="container"> <div class="row"> ${html.join('')} </div> </div> </body> </html> ;
  };
  
  
module.exports = generateTeamPage;
  