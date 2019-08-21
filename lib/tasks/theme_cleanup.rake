namespace :workarea do
  desc 'Initial setup for installation'
  task theme_cleanup: :environment do
    puts 'Cleaning up your theme for release!'
    original_sha = File.read('./lib/workarea/theme/override_commit').strip
    changed_files = `git diff --name-only HEAD #{original_sha}`.split("\n")

    # Remove any files that are unchanged since the original commit SHA
    # Reverse each to remove files within directories before attempting to delete the dir
    Dir['app/**/*'].reverse_each do |path|
      next if changed_files.include?(path)

      if File.directory?(path)
        Dir.rmdir path if Dir.entries(path).size == 2
      else
        File.delete(path)
      end
    end
  end
end
