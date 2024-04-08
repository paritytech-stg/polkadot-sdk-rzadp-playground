import subprocess
import sys

def builds():
	p = subprocess.run(['cargo', 'remote', '--no-copy-lock', '--', 'b', '-p', 'minimal-template-runtime'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
	return p.returncode == 0

def test():
	# One-by one uncomment every line that starts with '#"' and run the build command. Record any
	# lines that cause a failure. Then undo that replacement and proceed with the next line.

	print("Initial check")
	if not builds():
		raise Exception("Build failed")
	
	bad_lines = []
	while True:
		with open('umbrella/Cargo.toml', 'r') as f:
			content = f.read()
			lines = content.split('\n')
		# Ensure that all bad lines are commented out
		for i in bad_lines:
			if '#"' not in lines[i]:
				lines[i] = f'#{lines[i].strip()}'
		for i, line in enumerate(lines):
			if '#"' not in line:
				continue
			if i in bad_lines:
				continue
			else:
				lines[i] = line.replace('#', '')
				with open('umbrella/Cargo.toml', 'w') as f:
					f.write('\n'.join(lines))
				break
		if not builds():
			print(f"🔥 Line is bad  {i}: {line}")
			bad_lines.append(i)

if __name__ == '__main__':
	test()
