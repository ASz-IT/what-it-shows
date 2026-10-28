<script lang="ts">
  import { parseNumericDate } from '#lib/kb/date-parser';

  const parsed = parseNumericDate('02/01/2026', 'de-DE');
</script>

<p>
  The shared parser now follows the locale. For de-DE, 02/01/2026 is day {parsed?.day}, month {parsed?.month},
  year {parsed?.year}.
</p>
