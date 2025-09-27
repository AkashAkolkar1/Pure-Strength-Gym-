  const AUTH_USER_KEY = 'hu_user';
  const AUTH_USERS_KEY = 'hu_users'; // simple registry for demo

  function getCurrentUser(){ return JSON.parse(localStorage.getItem(AUTH_USER_KEY)||'null'); }
  function setCurrentUser(u){ localStorage.setItem(AUTH_USER_KEY, JSON.stringify(u)); }
  function signOut(){ localStorage.removeItem(AUTH_USER_KEY); location.href='index.html'; }

  function getUsers(){ return JSON.parse(localStorage.getItem(AUTH_USERS_KEY)||'[]'); }
  function setUsers(arr){ localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(arr)); }

  // Attach to any "Sign Out" link with id="navSignOut"
  document.addEventListener('DOMContentLoaded', ()=>{
    const u = getCurrentUser();
    const navUser = document.getElementById('navUser');
    const navAuth = document.getElementById('navAuth');
    if(navUser && navAuth){
      if(u){
        navUser.style.display='flex';
        navUser.querySelector('#navName').textContent = u.name || u.email;
        navAuth.style.display='none';
      }else{
        navUser.style.display='none';
        navAuth.style.display='flex';
      }
    }
    const so = document.getElementById('navSignOut');
    if(so){ so.addEventListener('click', (e)=>{ e.preventDefault(); signOut(); }); }
  });

