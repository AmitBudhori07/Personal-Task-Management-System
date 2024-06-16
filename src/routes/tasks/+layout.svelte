<script lang="ts">
</script>
  
  <nav>
    <ul>
      <li><a href="/tasks/all">All Tasks</a></li>
      <li><a href="/tasks/category/work">Work</a></li>
      <li><a href="/tasks/category/personal">Personal</a></li>
      <li><a href="/tasks/category/errands">Errands</a></li>
    </ul>
  </nav>
  
  <slot></slot>
  
  <style>
    nav ul {
      list-style: none;
      padding: 0;
    }
    nav li {
      display: inline;
      margin-right: 1rem;
    }
    nav a {
      text-decoration: none;
      color: #333;
    }
  </style>
  