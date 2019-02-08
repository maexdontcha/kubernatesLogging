.PHONY : build clear build-namespaces reate-cluster

build : | build-namespaces create-cluster

build-namespaces:
	kubectl apply -f namespaces.yml
create-cluster:
	kubectl apply -f ./yaml
clear:
	clear