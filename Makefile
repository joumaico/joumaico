deploy:
	sudo apt update && \
	sudo apt install -y ansible && \
	cd ansible && \
	ansible-playbook -i hosts system.yml && \
	ansible-playbook -i hosts build.yml

rebuild:
	cd ansible && \
	ansible-playbook -i hosts rebuild.yml
